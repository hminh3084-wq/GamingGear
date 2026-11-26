/**
 * checkout.js — Gửi đơn hàng lên API thay vì localStorage
 */
(() => {
    const orderListEl  = document.getElementById('checkout-order-list');
    const totalEl      = document.getElementById('checkout-total');
    const submitBtn    = document.getElementById('checkout-submit-btn');
    const nameInput    = document.getElementById('co-name');
    const phoneInput   = document.getElementById('co-phone');
    const addressInput = document.getElementById('co-address');
    const noteInput    = document.getElementById('co-note');
    const errName      = document.getElementById('err-name');
    const errPhone     = document.getElementById('err-phone');
    const errAddress   = document.getElementById('err-address');

    if (!orderListEl || !submitBtn) return;

    function parsePrice(str) { return parseInt((str || '0').replace(/\D/g, ''), 10) || 0; }
    function formatMoney(num) { return num.toLocaleString('vi-VN') + 'đ'; }

    // ── Render đơn hàng từ giỏ hàng ─────────────────────────────────────────
    function renderOrder() {
        const cart = getCart();
        if (!cart.length) { window.location.href = 'cart-detail.html'; return; }

        const grandTotal = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.qty, 0);

        orderListEl.innerHTML = cart.map(item => `
            <li class="checkout-order__item">
                <img src="${item.img}" alt="${item.name}" class="checkout-order__img">
                <div class="checkout-order__item-info">
                    <p class="checkout-order__item-name" title="${item.name}">${item.name}</p>
                    <span class="checkout-order__item-qty">x${item.qty}</span>
                </div>
                <span class="checkout-order__item-price">
                    ${formatMoney(parsePrice(item.price) * item.qty)}
                </span>
            </li>`).join('');

        if (totalEl) totalEl.textContent = formatMoney(grandTotal);
    }

    // ── Validate ─────────────────────────────────────────────────────────────
    function validate() {
        let ok = true;
        if (!nameInput.value.trim()) {
            errName.textContent = 'Vui lòng nhập họ và tên.';
            nameInput.classList.add('is-error'); ok = false;
        } else { errName.textContent = ''; nameInput.classList.remove('is-error'); }

        if (!/^0\d{9}$/.test(phoneInput.value.trim())) {
            errPhone.textContent = 'Số điện thoại không hợp lệ (10 số, bắt đầu bằng 0).';
            phoneInput.classList.add('is-error'); ok = false;
        } else { errPhone.textContent = ''; phoneInput.classList.remove('is-error'); }

        if (!addressInput.value.trim()) {
            errAddress.textContent = 'Vui lòng nhập địa chỉ giao hàng.';
            addressInput.classList.add('is-error'); ok = false;
        } else { errAddress.textContent = ''; addressInput.classList.remove('is-error'); }

        return ok;
    }

    // ── Đặt hàng → gửi lên API ───────────────────────────────────────────────
    submitBtn.addEventListener('click', async () => {
        if (!validate()) return;
        const cart = getCart();
        if (!cart.length) return;

        submitBtn.disabled    = true;
        submitBtn.textContent = 'Đang xử lý...';

        const paymentRadio = document.querySelector('input[name="payment"]:checked');

        try {
            const res  = await fetch('/api/orders', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name:    nameInput.value.trim(),
                    phone:   phoneInput.value.trim(),
                    address: addressInput.value.trim(),
                    note:    noteInput?.value.trim() || '',
                    payment: paymentRadio?.value || 'cod',
                    items:   cart,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Lỗi đặt hàng');

            // Xóa giỏ hàng
            localStorage.removeItem('luisgaf_cart');
            renderCart();

            // Lưu phone để trang tracking tự điền
            sessionStorage.setItem('last_order_phone', phoneInput.value.trim());

            // Chuyển sang trang tra cứu
            window.location.href = `order-tracking.html?code=${encodeURIComponent(data.madon)}`;

        } catch (err) {
            console.error('Lỗi đặt hàng:', err);
            submitBtn.disabled    = false;
            submitBtn.textContent = 'ĐẶT HÀNG';
            alert('Đặt hàng thất bại: ' + err.message);
        }
    });

    renderOrder();
})();
