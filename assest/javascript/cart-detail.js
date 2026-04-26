(function () {
    const listEl = document.querySelector('.cart-detail__list');
    const emptyEl = document.querySelector('.cart-detail__empty');
    const countEl = document.querySelector('.cart-detail__count');
    const summaryTotalEl = document.querySelector('.cart-summary__total');
    const checkoutBtn = document.querySelector('.cart-summary__checkout');

    if (!listEl || !emptyEl) return;

    function parsePrice(str) {
        if (!str) return 0;
        return parseInt(String(str).replace(/\D/g, ''), 10) || 0;
    }

    function formatMoney(num) {
        return num.toLocaleString('vi-VN') + 'đ';
    }

    function renderCartPage() {
        const cart = getCart();

        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        if (countEl) countEl.textContent = String(totalQty);

        const grandTotal = cart.reduce((sum, item) => {
            return sum + parsePrice(item.price) * item.qty;
        }, 0);

        if (summaryTotalEl) summaryTotalEl.textContent = formatMoney(grandTotal);

        const empty = cart.length === 0;
        emptyEl.hidden = !empty;
        listEl.style.display = empty ? 'none' : '';

        if (empty) {
            listEl.innerHTML = '';
            return;
        }

        listEl.innerHTML = cart
            .map(item => {
                const unit = parsePrice(item.price);
                const lineTotal = unit * item.qty;
                const oldHtml = item.oldPrice
                    ? `<span class="cart-detail__price-old">${item.oldPrice}</span>`
                    : '';

                return `
            <article class="cart-detail__item" data-id="${item.id}">
                <div class="cart-detail__item-media">
                    <button type="button" class="cart-detail__remove" aria-label="Xóa sản phẩm">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <img src="${item.img}" alt="" class="cart-detail__img">
                </div>
                <div class="cart-detail__item-info">
                    <h2 class="cart-detail__name">${escapeHtml(item.name)}</h2>
                    <div class="cart-detail__price">
                        <span class="cart-detail__price-current">${item.price}</span>
                        ${oldHtml}
                    </div>
                </div>
                <div class="cart-detail__item-actions">
                    <p class="cart-detail__line-total">${formatMoney(lineTotal)}</p>
                    <div class="cart-detail__qty">
                        <button type="button" class="cart-detail__qty-btn cart-detail__qty-btn--minus" aria-label="Giảm">−</button>
                        <input type="number" class="cart-detail__qty-input" min="1" value="${item.qty}" data-id="${item.id}">
                        <button type="button" class="cart-detail__qty-btn cart-detail__qty-btn--plus" aria-label="Tăng">+</button>
                    </div>
                </div>
            </article>`;
            })
            .join('');
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    listEl.addEventListener('click', e => {
        const removeBtn = e.target.closest('.cart-detail__remove');
        if (removeBtn) {
            const article = removeBtn.closest('.cart-detail__item');
            const id = parseInt(article?.dataset.id, 10);
            if (id) removeFromCart(id);
            renderCartPage();
            return;
        }

        const minus = e.target.closest('.cart-detail__qty-btn--minus');
        const plus = e.target.closest('.cart-detail__qty-btn--plus');
        if (minus || plus) {
            const article = (minus || plus).closest('.cart-detail__item');
            const id = parseInt(article?.dataset.id, 10);
            const input = article?.querySelector('.cart-detail__qty-input');
            if (!id || !input) return;
            let q = parseInt(input.value, 10) || 1;
            q = minus ? q - 1 : q + 1;
            updateCartItemQty(id, q);
            renderCartPage();
        }
    });

    listEl.addEventListener('change', e => {
        const input = e.target.closest('.cart-detail__qty-input');
        if (!input) return;
        const id = parseInt(input.dataset.id, 10);
        let q = parseInt(input.value, 10);
        if (Number.isNaN(q) || q < 1) q = 1;
        updateCartItemQty(id, q);
        renderCartPage();
    });

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const cart = getCart();
            if (cart.length === 0) return;
        });
    }

    renderCartPage();
})();
