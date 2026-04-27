const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const product = products.find(p => p.id === id);

const qtyInput = document.querySelector('.product-detail__qty-input');
const qtyBtns = document.querySelectorAll('.product-detail__qty-btn');

qtyBtns[0].addEventListener('click', () => {
    if (qtyInput.value > 1) qtyInput.value--;
});

qtyBtns[1].addEventListener('click', () => {
    qtyInput.value++;
});

if (!product) {
    window.location.href = new URL("index.html", window.location.href).href;
} else {
    document.querySelector('.product-detail__img').src = product.img;
    document.querySelector('.product-detail__name').textContent = product.name;
    document.querySelector('.product-detail__brand a').textContent = product.brand;
    document.querySelector('.product-detail__price-current').textContent = product.price;
    document.querySelector('.product-detail__price-old').textContent = product.oldPrice;

    const descEl = document.querySelector('.product-desc__content');
    if (product.specs) {
        let html = '<table class="product-specs">';
        for (const [key, value] of Object.entries(product.specs)) {
            html += `
                <tr class="product-specs__row">
                    <td class="product-specs__key">${key}</td>
                    <td class="product-specs__value">${value}</td>
                </tr>`;
        }
        html += '</table>';
        descEl.innerHTML = html;
    } else {
        descEl.textContent = product.desc;
    }

    const relatedSection = document.querySelector('.product-related');
    const track = document.querySelector('.product-related .product-slider__track');
    const relatedNav = document.querySelector('.product-related .product-section__nav');
    const prevBtn = document.querySelector('.product-related .product-section__btn--prev');
    const nextBtn = document.querySelector('.product-related .product-section__btn--next');

    function relatedCardHtml(p) {
        return `
            <div class="product-card" data-id="${p.id}">
                <div class="product-card__img-wrap">
                    <img src="${p.img}" alt="" class="product-card__img">
                </div>
                <div class="product-card__info">
                    <span class="product-card__brand">${p.brand}</span>
                    <h3 class="product-card__name">${p.name}</h3>
                    <div class="product-card__price">
                        <span class="product-card__price-current">${p.price}</span>
                        ${p.oldPrice ? `<span class="product-card__price-old">${p.oldPrice}</span>` : ''}
                    </div>
                </div>
            </div>`;
    }

    const related = products.filter(p => p.category === product.category && p.id !== id);

    if (related.length === 0) {
        relatedSection.style.display = 'none';
    } else {
        track.innerHTML = related.map(relatedCardHtml).join('');

        track.addEventListener('click', e => {
            const addBtn = e.target.closest('.product-card__btn');
            if (addBtn) {
                e.preventDefault();
                const card = addBtn.closest('.product-card');
                if (card) {
                    const relProduct = products.find(p => p.id === parseInt(card.dataset.id, 10));
                    if (relProduct) addToCart(relProduct, 1);
                }
                return;
            }
            const card = e.target.closest('.product-card');
        });

        if (related.length < 4) {
            if (relatedNav) relatedNav.style.display = 'none';
            track.style.transform = '';
            track.style.transition = '';
        } else {
            if (relatedNav) relatedNav.style.display = '';

            function measure() {
                const firstCard = track.querySelector('.product-card');
                if (!firstCard) return null;

                const cardW = firstCard.getBoundingClientRect().width;
                const styles = getComputedStyle(track);
                const gap = parseFloat(styles.gap || styles.columnGap || '0') || 0;

                const viewport = track.parentElement; // .product-slider
                const viewportW = viewport.getBoundingClientRect().width;

                const cardsPerView = Math.max(1, Math.round(viewportW / cardW));
                const step = cardW + gap;

                return { step, cloneCount: cardsPerView };
            }

            function setTransform(step, i) {
                track.style.transform = `translateX(-${i * step}px)`;
            }

            let m = measure();
            if (!m) {
                if (relatedNav) relatedNav.style.display = 'none';
                track.style.transform = '';
                track.style.transition = '';
            } else {
                let step = m.step;
                let cloneCount = m.cloneCount;

                const originals = Array.from(track.children);

                function buildClones() {
                    track.innerHTML = originals.map(el => el.outerHTML).join('');
                    const firstCards = Array.from(track.children).slice(0, cloneCount);
                    firstCards.forEach(card => track.appendChild(card.cloneNode(true)));
                    const lastCards = Array.from(track.children).slice(-cloneCount - cloneCount, -cloneCount);
                    lastCards.forEach(card => track.insertBefore(card.cloneNode(true), track.firstChild));
                }
                buildClones();

                let index = cloneCount;
                track.style.transition = 'none';
                setTransform(step, index);

                function slideTo(i) {
                    index = i;
                    track.style.transition = 'transform .4s ease';
                    setTransform(step, index);
                }

                track.addEventListener('transitionend', () => {
                    const total = track.children.length;
                    if (index >= total - cloneCount) {
                        index = cloneCount;
                        track.style.transition = 'none';
                        setTransform(step, index);
                    }
                    if (index < cloneCount) {
                        index = total - cloneCount * 2;
                        track.style.transition = 'none';
                        setTransform(step, index);
                    }
                });

                prevBtn.onclick = () => slideTo(index - 1);
                nextBtn.onclick = () => slideTo(index + 1);

                window.addEventListener('resize', () => {
                    requestAnimationFrame(() => {
                    const nm = measure();
                    if (!nm) return;
                    step = nm.step;
                    const newCloneCount = nm.cloneCount;
                    if (newCloneCount !== cloneCount) {
                        cloneCount = newCloneCount;
                        buildClones();
                        index = cloneCount;
                    }
                    track.style.transition = 'none';
                    setTransform(step, index);
                    });
                });
            }
        }
    }

    document.querySelector('.product-detail__btn--cart').addEventListener('click', () => {
        const qty = parseInt(document.querySelector('.product-detail__qty-input').value);
        addToCart(product, qty);
    });
}
