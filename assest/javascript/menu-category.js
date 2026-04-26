const mediaQuery = window.matchMedia('(max-width: 1024px)');

const categoryBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.category-menu');

function handleMenuMobile(e) {
    if (e.matches) {
        categoryBtn.onclick = (event) => {
            event.preventDefault();
            menu.classList.toggle('active'); 
        };
    } else {
        categoryBtn.onclick = null;
        menu.classList.remove('active');
    }
}

handleMenuMobile(mediaQuery);

mediaQuery.addEventListener('change', handleMenuMobile);