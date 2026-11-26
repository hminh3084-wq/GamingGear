/**
 * product-detail.js — Lấy chi tiết sản phẩm từ API
 */
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

if (!productId) {
    window.location.href = 'index.html';
}

const qtyInput = document.querySelector('.product-detail__qty-input');
const qtyBtns  = document.querySelectorAll('.product-detail__qty-btn');

qtyBtns[0]?.addEventListener('click', () => { if (qtyInput.value > 1) qtyInput.value--; });
qtyBtns[1]?.addEventListener('click', () => { qtyInput.value++; });

async function loadProduct() {
    try {
        const res = await fetch(`/api/products/${productId}`);
        if (!res.ok) { window.location.href = 'index.html'; return; }
        const product = await res.json();

        // Thông tin chính
        document.querySelector('.product-detail__img').src                = product.img;
        document.querySelector('.product-detail__name').textContent       = product.name;
        document.querySelector('.product-detail__brand a').textContent    = product.brand;
        document.querySelector('.product-detail__price-current').textContent = product.price;
        document.querySelector('.product-detail__price-old').textContent  = product.oldPrice || '';
        document.title = product.name + ' - LuisGaf Store';

        // Mô tả
        const descEl = document.querySelector('.product-desc__content');
        descEl.textContent = product.desc || 'Chưa có mô tả.';

        // Nút thêm vào giỏ
        document.querySelector('.product-detail__btn--cart').addEventListener('click', () => {
            addToCart(product, parseInt(qtyInput.value, 10) || 1);
        });

        // Nút mua ngay
        document.querySelector('.product-detail__btn--buy').addEventListener('click', () => {
            addToCart(product, parseInt(qtyInput.value, 10) || 1);
            window.location.href = 'checkout.html';
        });

        // Sản phẩm liên quan
        await loadRelated(product);

    } catch (err) {
        console.error('Lỗi tải sản phẩm:', err);
        window.location.href = 'index.html';
    }
}

async function loadRelated(product) {
    const relatedSection = document.querySelector('.product-related');
    const track          = document.querySelector('.product-related .product-slider__track');
    const relatedNav     = document.querySelector('.product-related .product-section__nav');
    const prevBtn        = document.querySelector('.product-related .product-section__btn--prev');
    const nextBtn        = document.querySelector('.product-related .product-section__btn--next');

    try {
        const res     = await fetch(`/api/products?category=${encodeURIComponent(product.category)}`);
        const all     = await res.json();
        const related = all.filter(p => p.id !== productId);

        if (!related.length) { relatedSection.style.display = 'none'; return; }

        track.innerHTML = related.map(p => `
            <div class="product-card" data-id="${p.id}" style="cursor:pointer">
                <div class="product-card__img-wrap">
                    <img src="${p.img}" alt="${p.name}" class="product-card__img" loading="lazy">
                </div>
                <div class="product-card__info">
                    <span class="product-card__brand">${p.brand}</span>
                    <h3 class="product-card__name">${p.name}</h3>
                    <div class="product-card__price">
                        <span class="product-card__price-current">${p.price}</span>
                        ${p.oldPrice ? `<span class="product-card__price-old">${p.oldPrice}</span>` : ''}
                    </div>
                    <button class="product-card__btn">Thêm Vào Giỏ</button>
                </div>
            </div>`).join('');

        track.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => window.location.href = `product.html?id=${card.dataset.id}`);
            card.querySelector('.product-card__btn').addEventListener('click', e => {
                e.stopPropagation();
                const p = related.find(x => x.id === parseInt(card.dataset.id, 10));
                if (p) addToCart(p, 1);
            });
        });

        // Slider
        let sliderIndex = 0;
        function measure() {
            const firstCard = track.querySelector('.product-card');
            if (!firstCard) return null;
            const cardW = firstCard.getBoundingClientRect().width;
            if (!cardW) return null;
            const gap       = parseFloat(getComputedStyle(track).gap || '0') || 0;
            const viewportW = track.parentElement.getBoundingClientRect().width;
            const visible   = Math.max(1, Math.round(viewportW / cardW));
            return { step: cardW + gap, maxIndex: Math.max(0, related.length - visible), visible };
        }
        function syncSlider() {
            const m = measure();
            if (!m) return;
            sliderIndex = Math.min(Math.max(0, sliderIndex), m.maxIndex);
            track.style.transform = `translateX(-${sliderIndex * m.step}px)`;
            if (prevBtn) prevBtn.disabled = sliderIndex === 0;
            if (nextBtn) nextBtn.disabled = sliderIndex === m.maxIndex;
            if (relatedNav) relatedNav.style.display = m.maxIndex === 0 ? 'none' : '';
        }
        if (prevBtn) prevBtn.onclick = () => { const m = measure(); if (!m) return; sliderIndex = Math.max(0, sliderIndex - 1); track.style.transform = `translateX(-${sliderIndex * m.step}px)`; prevBtn.disabled = sliderIndex === 0; nextBtn.disabled = sliderIndex === measure()?.maxIndex; };
        if (nextBtn) nextBtn.onclick = () => { const m = measure(); if (!m) return; sliderIndex = Math.min(m.maxIndex, sliderIndex + 1); track.style.transform = `translateX(-${sliderIndex * m.step}px)`; prevBtn.disabled = sliderIndex === 0; nextBtn.disabled = sliderIndex === m.maxIndex; };
        requestAnimationFrame(syncSlider);
        window.addEventListener('resize', () => requestAnimationFrame(syncSlider));

    } catch (err) {
        console.error('Lỗi tải sản phẩm liên quan:', err);
        relatedSection.style.display = 'none';
    }
}

loadProduct();
