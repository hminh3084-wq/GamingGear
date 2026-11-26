/**
 * api.js — Lấy dữ liệu từ backend thay vì dùng data.js hardcode
 * Được load bởi tất cả các trang HTML (thay thế data.js)
 */

const API_BASE = 'http://localhost:3000/api';

// Cache để không gọi API nhiều lần
let _products = null;

/**
 * Lấy toàn bộ sản phẩm (có cache).
 * Trả về mảng products đúng format như data.js cũ.
 */
async function fetchProducts() {
    if (_products) return _products;
    const res  = await fetch(`${API_BASE}/products`);
    if (!res.ok) throw new Error('Không thể tải sản phẩm');
    _products = await res.json();
    return _products;
}

/**
 * Khởi tạo biến global `products` (giống data.js),
 * rồi gọi callback để các trang render tiếp.
 */
async function initProducts(callback) {
    try {
        window.products = await fetchProducts();
        if (typeof callback === 'function') callback();
    } catch (err) {
        console.error('Lỗi tải sản phẩm:', err);
        // Fallback: nếu không kết nối được server thì dùng data.js cũ
        if (typeof callback === 'function') callback();
    }
}

/**
 * Tạo đơn hàng mới — gửi lên server thay vì lưu localStorage
 * Trả về { success, madon } hoặc throw Error
 */
async function createOrder(orderData) {
    const res = await fetch(`${API_BASE}/orders`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(orderData),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Lỗi đặt hàng');
    return data;
}

/**
 * Tra cứu đơn hàng theo mã + SĐT
 * Trả về object đơn hàng hoặc throw Error
 */
async function fetchOrder(code, phone) {
    const res = await fetch(
        `${API_BASE}/orders/${encodeURIComponent(code)}?phone=${encodeURIComponent(phone)}`
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Không tìm thấy đơn hàng');
    return data;
}
