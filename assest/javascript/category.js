(() => {
    const menuBtn = document.querySelector('.header__menu-btn');
    const categoryList = document.querySelector('.category-list');
    const overlay = document.querySelector('.category-overlay');
    const header = document.querySelector('.header');
    const headerNav = document.querySelector('.header__nav');

    if (!menuBtn || !categoryList || !overlay || !header || !headerNav) return;

    let floatingCategory = null;

    function getLayoutGrid() {
        return (
            document.querySelector('.app__container .grid') ||
            document.querySelector('.product-detail > .grid.wide') ||
            document.querySelector('.cart-detail > .grid.wide') ||
            document.querySelector('.store-detail > .grid.wide')
        );
    }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        const grid = getLayoutGrid();
        if (!grid) return;

        overlay.classList.toggle('active');

        if (!floatingCategory) {
            floatingCategory = categoryList.cloneNode(true);
            floatingCategory.classList.add('category-list--floating');

            const gridRect = grid.getBoundingClientRect();
            const topOffset = header.offsetHeight + headerNav.offsetHeight;

            floatingCategory.style.position = 'fixed';
            floatingCategory.style.top = topOffset + 'px';
            floatingCategory.style.left = gridRect.left + 'px';
            floatingCategory.style.width = categoryList.offsetWidth + 'px';
            floatingCategory.style.zIndex = '998';
            floatingCategory.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25)';
            floatingCategory.style.animation = 'fadeIn .2s ease';

            document.body.appendChild(floatingCategory);
        } else {
            document.body.removeChild(floatingCategory);
            floatingCategory = null;
        }
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        if (floatingCategory) {
            document.body.removeChild(floatingCategory);
            floatingCategory = null;
        }
    });
})();