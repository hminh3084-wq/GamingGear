/**
 * store.js — Trang danh mục, lấy sản phẩm từ API
 */
(() => {
    const PRODUCTS_PER_PAGE = 8;

    const grid         = document.getElementById('store-grid');
    const paginationEl = document.getElementById('store-pagination');
    const countNumEl   = document.querySelector('.store-toolbar__count-num');
    const sortSelect   = document.getElementById('sort-select');
    const brandListEl  = document.getElementById('brand-list');
    const applyBtn     = document.getElementById('apply-filter');
    const resetBtn     = document.getElementById('reset-filter');
    const priceMinEl   = document.getElementById('price-min');
    const priceMaxEl   = document.getElementById('price-max');
    const breadcrumbEl = document.querySelector('.store-breadcrumb__current');

    if (!grid) return;

    const params           = new URLSearchParams(window.location.search);
    const selectedCategory = params.get('category') || '';

    const CATEGORY_LABELS = {
        laptop: 'Laptop', pc: 'PC Gaming', keyboard: 'Bàn phím',
        mouse: 'Chuột', monitor: 'Màn hình', headphone: 'Tai nghe',
        vga: 'VGA', ram: 'RAM', mic: 'Micro', ps: 'Tay cầm',
    };

    if (breadcrumbEl && selectedCategory) {
        breadcrumbEl.textContent = CATEGORY_LABELS[selectedCategory] || selectedCategory;
    }

    let baseProducts = [];
    let state = { brands: [], priceRange: 'all', priceMin: null, priceMax: null, sort: 'default', page: 1 };

    function parsePrice(str) { return parseInt((str || '0').replace(/\D/g, ''), 10) || 0; }

    function fmtMillion(val) {
        const m = val / 1_000_000;
        return (m % 1 === 0 ? m : m.toFixed(1).replace('.', ',')) + ' triệu';
    }

    function getUniqueBrands() { return [...new Set(baseProducts.map(p => p.brand))].sort(); }

    function buildPriceRanges() {
        const prices = baseProducts.map(p => parsePrice(p.price));
        if (!prices.length) return [];
        const minP = Math.min(...prices), maxP = Math.max(...prices);
        if (minP === maxP) return [];
        const lo   = Math.floor(minP / 1_000_000) * 1_000_000;
        const hi   = Math.ceil(maxP  / 1_000_000) * 1_000_000;
        const step = Math.ceil((hi - lo) / 4 / 1_000_000) * 1_000_000;
        const ranges = []; let cursor = lo;
        while (cursor < hi) { const next = Math.min(cursor + step, hi); ranges.push({ min: cursor, max: next }); cursor = next; }
        return ranges;
    }

    function renderBrandList() {
        if (!brandListEl) return;
        brandListEl.innerHTML = getUniqueBrands().map(b => `
            <li class="store-filter__item">
                <label class="store-filter__check-label">
                    <input type="checkbox" class="store-filter__checkbox" value="${b}"> ${b}
                </label>
            </li>`).join('');
    }

    function renderPriceRanges() {
        const el = document.getElementById('price-range-list');
        if (!el) return;
        const ranges = buildPriceRanges();
        let html = `<li class="store-filter__item"><label class="store-filter__radio-label"><input type="radio" name="price-range" class="store-filter__radio" value="all" checked> Tất cả</label></li>`;
        ranges.forEach(({ min, max }, i) => {
            const isFirst = i === 0, isLast = i === ranges.length - 1;
            const label = isFirst && min === 0 ? `Dưới ${fmtMillion(max)}` : isLast ? `Trên ${fmtMillion(min)}` : `${fmtMillion(min)} – ${fmtMillion(max)}`;
            html += `<li class="store-filter__item"><label class="store-filter__radio-label"><input type="radio" name="price-range" class="store-filter__radio" value="${min}-${max}"> ${label}</label></li>`;
        });
        el.innerHTML = html;
    }

    function getFiltered() {
        let list = [...baseProducts];
        if (state.brands.length) list = list.filter(p => state.brands.includes(p.brand));
        if (state.priceRange !== 'all') {
            const [minV, maxV] = state.priceRange.split('-').map(Number);
            list = list.filter(p => { const price = parsePrice(p.price); return price >= minV && price <= maxV; });
        }
        if (state.priceMin !== null || state.priceMax !== null) {
            const lo = (state.priceMin ?? 0) * 1_000_000, hi = (state.priceMax ?? Infinity) * 1_000_000;
            list = list.filter(p => { const price = parsePrice(p.price); return price >= lo && price <= hi; });
        }
        if (state.sort === 'price-asc')  list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        if (state.sort === 'price-desc') list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        if (state.sort === 'name-asc')   list.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
        return list;
    }

    function renderGrid() {
        const filtered = getFiltered();
        const total    = filtered.length;
        const paged    = filtered.slice((state.page - 1) * PRODUCTS_PER_PAGE, state.page * PRODUCTS_PER_PAGE);
        if (countNumEl) countNumEl.textContent = total;
        if (!paged.length) { grid.innerHTML = `<p class="store-empty">Không tìm thấy sản phẩm phù hợp.</p>`; if (paginationEl) paginationEl.innerHTML = ''; return; }

        grid.innerHTML = paged.map(p => `
            <div class="store-card product-card" data-id="${p.id}">
                <div class="store-card__img-wrap">
                    <img src="${p.img}" alt="${p.name}" class="product-card__img" loading="lazy">
                </div>
                <div class="product-card__info">
                    <span class="product-card__brand">${p.brand}</span>
                    <h3 class="product-card__name">${p.name}</h3>
                    <div class="product-card__price">
                        <span class="product-card__price-current">${p.price}</span>
                        ${p.oldPrice ? `<span class="product-card__price-old">${p.oldPrice}</span>` : ''}
                    </div>
                    <button class="product-card__btn store-card__add-btn">Thêm Vào Giỏ</button>
                </div>
            </div>`).join('');

        grid.querySelectorAll('.store-card').forEach(card => {
            card.addEventListener('click', () => window.location.href = `product.html?id=${card.dataset.id}`);
            card.querySelector('.store-card__add-btn').addEventListener('click', e => {
                e.stopPropagation();
                const p = baseProducts.find(x => x.id === parseInt(card.dataset.id));
                if (p) addToCart(p, 1);
            });
        });

        renderPagination(total);
    }

    function renderPagination(total) {
        if (!paginationEl) return;
        const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);
        if (totalPages <= 1) { paginationEl.innerHTML = ''; return; }
        const { page } = state;
        let html = `<button class="store-page__btn store-page__btn--arrow" data-page="${page - 1}" ${page === 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>`;
        for (let i = 1; i <= totalPages; i++) html += `<button class="store-page__btn ${i === page ? 'store-page__btn--active' : ''}" data-page="${i}">${i}</button>`;
        html += `<button class="store-page__btn store-page__btn--arrow" data-page="${page + 1}" ${page === totalPages ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>`;
        paginationEl.innerHTML = html;
        paginationEl.querySelectorAll('.store-page__btn:not([disabled])').forEach(btn => {
            btn.addEventListener('click', () => { state.page = parseInt(btn.dataset.page); renderGrid(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
        });
    }

    function readFilterState() {
        state.brands     = [...document.querySelectorAll('.store-filter__checkbox:checked')].map(cb => cb.value);
        const radio      = document.querySelector('input[name="price-range"]:checked');
        state.priceRange = radio ? radio.value : 'all';
        const minVal     = parseFloat(priceMinEl?.value), maxVal = parseFloat(priceMaxEl?.value);
        state.priceMin   = isNaN(minVal) ? null : minVal;
        state.priceMax   = isNaN(maxVal) ? null : maxVal;
        state.page       = 1;
    }

    if (applyBtn) applyBtn.addEventListener('click', () => { readFilterState(); renderGrid(); });
    if (resetBtn) resetBtn.addEventListener('click', () => {
        document.querySelectorAll('.store-filter__checkbox').forEach(cb => cb.checked = false);
        const allRadio = document.querySelector('input[name="price-range"][value="all"]');
        if (allRadio) allRadio.checked = true;
        if (priceMinEl) priceMinEl.value = '';
        if (priceMaxEl) priceMaxEl.value = '';
        state = { ...state, brands: [], priceRange: 'all', priceMin: null, priceMax: null, page: 1 };
        renderGrid();
    });
    if (sortSelect) sortSelect.addEventListener('change', () => { state.sort = sortSelect.value; state.page = 1; renderGrid(); });

    // ── Khởi tạo: lấy sản phẩm từ API ───────────────────────────────────────
    async function init() {
        try {
            const url = selectedCategory
                ? `/api/products?category=${encodeURIComponent(selectedCategory)}`
                : '/api/products';
            const res  = await fetch(url);
            baseProducts = await res.json();
            window.products = baseProducts; // cho category.js dùng count

            renderBrandList();
            renderPriceRanges();
            renderGrid();

            // Cập nhật count featured category (nếu có trên trang)
            document.querySelectorAll('.featured-category__item').forEach(item => {
                const cat     = item.dataset.category;
                const countEl = item.querySelector('.featured-category__count');
                if (!cat || !countEl) return;
                countEl.textContent = `${baseProducts.filter(p => p.category === cat).length} Sản Phẩm`;
                item.addEventListener('click', () => window.location.href = `store.html?category=${cat}`);
            });

        } catch (err) {
            console.error('Lỗi tải sản phẩm store:', err);
            grid.innerHTML = `<p class="store-empty">Không thể tải sản phẩm. Vui lòng thử lại.</p>`;
        }
    }

    init();
})();
