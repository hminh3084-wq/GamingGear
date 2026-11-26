const express = require('express');
const router  = express.Router();
const pool    = require('../db');

// POST /api/orders       — tạo đơn hàng mới
// GET  /api/orders/:code — tra cứu đơn hàng theo mã + SĐT

// ── Tạo đơn hàng ─────────────────────────────────────────────────────────────
router.post('/', async (req, res) => {
    const { name, phone, address, note, payment, items } = req.body;

    if (!name || !phone || !address || !items?.length) {
        return res.status(400).json({ error: 'Thiếu thông tin đặt hàng' });
    }

    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();

        // Sinh mã đơn hàng: DH01, DH02...
        const [[{ total }]] = await conn.execute('SELECT COUNT(*) AS total FROM DonHang');
        const madon = 'DH' + String(total + 1).padStart(2, '0');

        // Tính tổng tiền
        const tongtien = items.reduce((sum, item) => {
            return sum + parseInt(item.price.replace(/\D/g, ''), 10) * item.qty;
        }, 0);

        // Insert DonHang
        const [result] = await conn.execute(`
            INSERT INTO DonHang
                (madon, tennguoinhan, sodienthoai, diachi, ghichu,
                 phuongthucthanhtoan, tongtien, trangthaidonhang)
            VALUES (?, ?, ?, ?, ?, ?, ?, N'Chờ xác nhận')
        `, [
            madon, name, phone, address, note || '',
            payment === 'bank' ? 'Chuyển khoản' : 'COD',
            tongtien,
        ]);

        const donhang_id = result.insertId;

        // Insert ChiTietDonHang
        for (const item of items) {
            const giamua = parseInt(item.price.replace(/\D/g, ''), 10);
            await conn.execute(`
                INSERT INTO ChiTietDonHang (donhang_id, sanpham_id, soluongmua, giamua)
                VALUES (?, ?, ?, ?)
            `, [donhang_id, item.id, item.qty, giamua]);
        }

        await conn.commit();
        res.status(201).json({ success: true, madon });

    } catch (err) {
        await conn.rollback();
        console.error('Lỗi POST /api/orders:', err.message);
        res.status(500).json({ error: 'Lỗi server khi tạo đơn hàng' });
    } finally {
        conn.release();
    }
});

// ── Tra cứu đơn hàng ─────────────────────────────────────────────────────────
router.get('/:code', async (req, res) => {
    const { code }  = req.params;
    const { phone } = req.query;

    if (!code || !phone) {
        return res.status(400).json({ error: 'Thiếu mã đơn hoặc số điện thoại' });
    }

    try {
        const [orders] = await pool.execute(`
            SELECT id, madon AS code, tennguoinhan AS name,
                   sodienthoai AS phone, diachi AS address,
                   ghichu AS note, phuongthucthanhtoan AS payment,
                   trangthaidonhang AS status,
                   ngaydat AS \`date\`, tongtien AS total
            FROM DonHang
            WHERE madon = ? AND sodienthoai = ?
        `, [code.toUpperCase(), phone]);

        if (!orders.length) {
            return res.status(404).json({ error: 'Không tìm thấy đơn hàng' });
        }

        const order = orders[0];

        const [items] = await pool.execute(`
            SELECT sp.id, sp.tensp AS name, sp.hinhanh AS img,
                   ct.soluongmua AS qty, ct.giamua AS price
            FROM ChiTietDonHang ct
            JOIN SanPham sp ON ct.sanpham_id = sp.id
            WHERE ct.donhang_id = ?
        `, [order.id]);

        const statusMap = {
            'Chờ xác nhận': 'pending',
            'Đã xác nhận':  'confirmed',
            'Đang giao':    'shipping',
            'Hoàn thành':   'done',
            'Đã hủy':       'cancelled',
        };

        res.json({
            code:    order.code,
            name:    order.name,
            phone:   order.phone,
            address: order.address,
            payment: order.payment,
            status:  statusMap[order.status] || 'pending',
            date:    order.date,
            total:   Number(order.total),
            items:   items.map(i => ({
                id:    i.id,
                name:  i.name,
                img:   './' + i.img,
                qty:   i.qty,
                price: Number(i.price).toLocaleString('vi-VN') + 'đ',
            })),
        });

    } catch (err) {
        console.error('Lỗi GET /api/orders/:code:', err.message);
        res.status(500).json({ error: 'Lỗi server' });
    }
});

module.exports = router;
