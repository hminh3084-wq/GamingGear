(() => {
    const container = document.querySelector('.store-detail .row');
    const featuredItems = document.querySelectorAll('.featured-category__item');

    const params = new URLSearchParams(window.location.search);
    const selectedCategory = params.get('category');

    function renderProducts(cat) {
        if (!container || typeof products === 'undefined') return;

        const filtered = cat ? products.filter(p => p.category === cat) : products;

        container.innerHTML = filtered.map(p => `
            <div class="col l-2-4 m-4 c-6">
                <div class="store-detail__card product-card" data-id="${p.id}" style="cursor:pointer">
                    <div class="store-detail__img-wrap">
                        <img src="${p.img}" alt="${p.name}" class="product-card__img">
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
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                window.location.href = `/product.html?id=${card.dataset.id}`;
            });

            const addBtn = card.querySelector('.product-card__btn');
            if (addBtn) {
                addBtn.addEventListener('click', e => {
                    e.stopPropagation();
                    const product = products.find(p => p.id === parseInt(card.dataset.id));
                    if (product) addToCart(product, 1);
                });
            }
        });
    }

    if (container) {
        renderProducts(selectedCategory);
    }

    if (typeof products !== 'undefined') {
        featuredItems.forEach(item => {
            const cat = item.dataset.category;
            const countEl = item.querySelector('.featured-category__count');
            if (!cat || !countEl) return;
            const n = products.filter(p => p.category === cat).length;
            countEl.textContent = `${n} Sản Phẩm`;
        });
    }

    featuredItems.forEach(item => {
        item.addEventListener('click', () => {
            const cat = item.dataset.category;
            if (cat) window.location.href = `store.html?category=${cat}`;
        });
    });
})();