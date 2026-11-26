const express = require('express');
const router  = express.Router();
const pool    = require('../db');

// GET /api/products               — tất cả sản phẩm
// GET /api/products?category=...  — lọc theo danh mục
// GET /api/products/:id           — chi tiết 1 sản phẩm
// GET /api/products/meta/categories — danh sách danh mục

// ── Lấy danh sách sản phẩm ───────────────────────────────────────────────────
router.get('/', async (req, res) => {
    try {
        const category = req.query.category;

        let query = `
            SELECT
                sp.id,
                sp.tensp            AS name,
                dm.slug             AS category,
                th.tenthuonghieu    AS brand,
                sp.giaban           AS price,
                sp.giagoc           AS oldPrice,
                sp.hinhanh          AS img,
                sp.mota             AS \`desc\`,
                sp.noibat           AS featured,
                sp.soluongtonkho    AS stock
            FROM SanPham sp
            JOIN DanhMuc    dm ON sp.danhmuc_id    = dm.id
            LEFT JOIN ThuongHieu th ON sp.thuonghieu_id = th.id
            WHERE sp.trangthai = 1
        `;

        const params = [];
        if (category) {
            query += ' AND dm.slug = ?';
            params.push(category);
        }

        query += ' ORDER BY sp.id';

        const [rows] = await pool.execute(query, params);
        res.json(rows.map(formatProduct));

    } catch (err) {
        console.error('Lỗi GET /api/products:', err.message);
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// ── Danh mục (phải đặt TRƯỚC /:id) ───────────────────────────────────────────
router.get('/meta/categories', async (req, res) => {
    try {
        const [rows] = await pool.execute(`
            SELECT dm.id, dm.tendanhmuc AS name, dm.slug,
                   COUNT(sp.id) AS productCount
            FROM DanhMuc dm
            LEFT JOIN SanPham sp ON sp.danhmuc_id = dm.id AND sp.trangthai = 1
            GROUP BY dm.id, dm.tendanhmuc, dm.slug
            ORDER BY dm.id
        `);
        res.json(rows);
    } catch (err) {
        console.error('Lỗi GET /api/products/meta/categories:', err.message);
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// ── Chi tiết 1 sản phẩm ──────────────────────────────────────────────────────
router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) return res.status(400).json({ error: 'ID không hợp lệ' });

        const [rows] = await pool.execute(`
            SELECT
                sp.id,
                sp.tensp            AS name,
                dm.slug             AS category,
                th.tenthuonghieu    AS brand,
                sp.giaban           AS price,
                sp.giagoc           AS oldPrice,
                sp.hinhanh          AS img,
                sp.mota             AS \`desc\`,
                sp.soluongtonkho    AS stock
            FROM SanPham sp
            JOIN DanhMuc    dm ON sp.danhmuc_id    = dm.id
            LEFT JOIN ThuongHieu th ON sp.thuonghieu_id = th.id
            WHERE sp.id = ? AND sp.trangthai = 1
        `, [id]);

        if (!rows.length) return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });

        res.json(formatProduct(rows[0]));

    } catch (err) {
        console.error('Lỗi GET /api/products/:id:', err.message);
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// ── Helper ────────────────────────────────────────────────────────────────────
function formatProduct(p) {
    const price    = Number(p.price);
    const oldPrice = p.oldPrice ? Number(p.oldPrice) : null;
    return {
        id:       p.id,
        name:     p.name,
        category: p.category,
        brand:    p.brand || '',
        price:    price.toLocaleString('vi-VN') + 'đ',
        oldPrice: oldPrice ? oldPrice.toLocaleString('vi-VN') + 'đ' : '',
        img:      './' + p.img,
        desc:     p.desc || '',
        stock:    p.stock,
        featured: !!p.featured,
    };
}

module.exports = router;
