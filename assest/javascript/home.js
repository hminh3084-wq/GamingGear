/**
 * home.js — Render sản phẩm trang chủ từ API
 */
(() => {
    function productCardHtml(p) {
        return `
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
            </div>`;
    }

    async function init() {
        try {
            // Lấy tất cả sản phẩm từ API
            const res      = await fetch('/api/products');
            const products = await res.json();

            // Lưu vào window để product.js dùng (gắn event click/addToCart)
            window.products = products;

            // Render từng section theo category
            document.querySelectorAll('.product-section[data-home-category]').forEach(section => {
                const cat   = section.dataset.homeCategory;
                const track = section.querySelector('.product-slider__track');
                if (!track) return;

                const filtered = products.filter(p => p.category === cat);
                track.innerHTML = filtered.map(productCardHtml).join('');
            });

            // Gắn event sau khi đã render (gọi lại product.js logic)
            setupProductEvents();

            // Cập nhật số lượng danh mục nổi bật
            document.querySelectorAll('.featured-category__item').forEach(item => {
                const cat     = item.dataset.category;
                const countEl = item.querySelector('.featured-category__count');
                if (!cat || !countEl) return;
                countEl.textContent = `${products.filter(p => p.category === cat).length} Sản Phẩm`;
            });

        } catch (err) {
            console.error('Lỗi tải sản phẩm trang chủ:', err);
        }
    }

    function setupProductEvents() {
        // Slider nav
        document.querySelectorAll('.product-section').forEach(section => {
            const track   = section.querySelector('.product-slider__track');
            const prevBtn = section.querySelector('.product-section__btn--prev');
            const nextBtn = section.querySelector('.product-section__btn--next');
            if (!track || !prevBtn || !nextBtn) return;

            let index = 0;

            function measure() {
                const cards = Array.from(track.querySelectorAll('.product-card'));
                if (!cards[0]) return null;
                const cardW     = cards[0].getBoundingClientRect().width;
                if (!cardW) return null;
                const gap       = parseFloat(getComputedStyle(track).gap || '0') || 0;
                const viewportW = track.parentElement.getBoundingClientRect().width;
                const visible   = Math.max(1, Math.round(viewportW / cardW));
                return { step: cardW + gap, maxIndex: Math.max(0, cards.length - visible) };
            }

            function sync() {
                const m = measure();
                if (!m) return;
                index = Math.min(Math.max(0, index), m.maxIndex);
                track.style.transform = `translateX(-${index * m.step}px)`;
                prevBtn.disabled = index === 0;
                nextBtn.disabled = index === m.maxIndex;
            }

            prevBtn.onclick = () => { const m = measure(); if (!m) return; index = Math.max(0, index - 1); track.style.transform = `translateX(-${index * m.step}px)`; prevBtn.disabled = index === 0; nextBtn.disabled = index === m.maxIndex; };
            nextBtn.onclick = () => { const m = measure(); if (!m) return; index = Math.min(m.maxIndex, index + 1); track.style.transform = `translateX(-${index * m.step}px)`; prevBtn.disabled = index === 0; nextBtn.disabled = index === m.maxIndex; };

            requestAnimationFrame(sync);
            window.addEventListener('resize', () => requestAnimationFrame(sync));
        });

        // Click card → trang chi tiết
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                window.location.href = `product.html?id=${card.dataset.id}`;
            });
        });

        // Nút thêm vào giỏ
        document.querySelectorAll('.product-card__btn').forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                const card = btn.closest('.product-card');
                if (!card) return;
                const p = window.products?.find(x => x.id === parseInt(card.dataset.id, 10));
                if (p) addToCart(p, 1);
            });
        });
    }

    init();
})();
