/**
 * order-tracking.js — Tra cứu đơn hàng từ API
 */
(() => {
    const searchCodeEl  = document.getElementById('track-code');
    const searchPhoneEl = document.getElementById('track-phone');
    const searchBtn     = document.getElementById('track-btn');
    const searchErrEl   = document.getElementById('track-error');
    const resultEl      = document.getElementById('tracking-result');

    const STATUS_STEPS  = ['pending', 'confirmed', 'shipping', 'done'];
    const STATUS_LABELS = {
        pending: 'Chờ xác nhận', confirmed: 'Đã xác nhận',
        shipping: 'Đang giao',   done: 'Hoàn thành',
    };

    function parsePrice(str) { return parseInt((str || '0').replace(/\D/g, ''), 10) || 0; }
    function formatMoney(num) { return num.toLocaleString('vi-VN') + 'đ'; }
    function formatDate(isoStr) {
        const d = new Date(isoStr);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    }

    // ── HTML 1 đơn hàng ──────────────────────────────────────────────────────
    function orderCardHtml(order) {
        const stepIdx = STATUS_STEPS.indexOf(order.status || 'pending');

        const timelineHtml = STATUS_STEPS.map((step, i) => {
            const cls = i < stepIdx ? 'done' : i === stepIdx ? 'active' : '';
            return `<div class="tracking-step ${cls}">
                        <div class="tracking-step__dot"></div>
                        <div class="tracking-step__line"></div>
                        <span class="tracking-step__label">${STATUS_LABELS[step]}</span>
                    </div>`;
        }).join('');

        const rowsHtml = (order.items || []).map(item => `
            <tr>
                <td>${item.name}</td>
                <td style="text-align:center">${item.qty}</td>
                <td>${formatMoney(parsePrice(item.price) * item.qty)}</td>
            </tr>`).join('');

        return `
            <div class="tracking-order-card">
                <div class="tracking-result__header">
                    <h2 class="tracking-result__code">Đơn hàng ${order.code}</h2>
                    <span class="tracking-result__date">Ngày đặt: ${formatDate(order.date)}</span>
                </div>
                <div class="tracking-timeline">${timelineHtml}</div>
                <table class="tracking-table">
                    <thead><tr><th>Sản phẩm</th><th style="text-align:center">SL</th><th>Đơn giá</th></tr></thead>
                    <tbody>${rowsHtml}</tbody>
                </table>
                <div class="tracking-result__footer">
                    <span class="tracking-result__receiver">
                        Người nhận: <strong>${order.name}</strong> &nbsp;-&nbsp; ${order.phone}
                    </span>
                    <span class="tracking-result__total">Tổng tiền: ${formatMoney(order.total)}</span>
                </div>
            </div>`;
    }

    function showEmpty() {
        resultEl.innerHTML = `
            <div class="tracking-empty">
                <i class="fa-regular fa-folder-open tracking-empty__icon"></i>
                <p class="tracking-empty__text">Bạn chưa có đơn hàng nào.</p>
                <a href="index.html" class="tracking-empty__link">Mua sắm ngay</a>
            </div>`;
        resultEl.hidden = false;
    }

    function showResult(order) {
        resultEl.innerHTML = orderCardHtml(order);
        resultEl.hidden = false;
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // ── Tra cứu theo mã + SĐT ───────────────────────────────────────────────
    async function doSearch() {
        const code  = searchCodeEl?.value.trim().toUpperCase();
        const phone = searchPhoneEl?.value.trim();

        if (!code || !phone) {
            if (searchErrEl) searchErrEl.textContent = 'Vui lòng nhập đầy đủ mã đơn hàng và số điện thoại.';
            return;
        }

        if (searchErrEl) searchErrEl.textContent = '';

        try {
            const res  = await fetch(`/api/orders/${encodeURIComponent(code)}?phone=${encodeURIComponent(phone)}`);
            const data = await res.json();

            if (!res.ok) {
                if (searchErrEl) searchErrEl.textContent = data.error || 'Không tìm thấy đơn hàng.';
                resultEl.hidden = true;
                return;
            }

            showResult(data);

        } catch (err) {
            if (searchErrEl) searchErrEl.textContent = 'Lỗi kết nối server.';
        }
    }

    if (searchBtn) searchBtn.addEventListener('click', doSearch);
    [searchCodeEl, searchPhoneEl].forEach(el => {
        el?.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
    });

    // ── Khởi tạo ─────────────────────────────────────────────────────────────
    const autoCode = new URLSearchParams(window.location.search).get('code');

    if (autoCode) {
        // Từ checkout chuyển sang — cần SĐT để tra cứu
        // Lưu tạm phone vào sessionStorage từ checkout
        const phone = sessionStorage.getItem('last_order_phone');
        if (searchCodeEl) searchCodeEl.value = autoCode;
        if (phone && searchPhoneEl) {
            searchPhoneEl.value = phone;
            sessionStorage.removeItem('last_order_phone');
            doSearch();
        }
    } else {
        // Vào thẳng → hiện empty (vì không có session, không biết ai đang xem)
        showEmpty();
    }
})();
