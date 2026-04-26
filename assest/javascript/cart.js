const CART_KEY = 'luisgaf_cart';
function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(product, qty = 1) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ ...product, qty });
    }
    saveCart(cart);
    renderCart();
}

function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id);
    saveCart(cart);
    renderCart();
}

function updateCartItemQty(id, qty) {
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;
    const q = parseInt(qty, 10);
    if (Number.isNaN(q) || q < 1) {
        removeFromCart(id);
        return;
    }
    item.qty = q;
    saveCart(cart);
    renderCart();
}

function renderCart() {
    const cart = getCart();
    const list = document.querySelector('.header__cart-list');
    const footer = document.querySelector('.header__cart-footer');
    const badge = document.querySelector('.header__cart-badge');
    const totalPrice = document.querySelector('.header__cart-total-price');
    const totalCount = document.querySelector('.header__cart-count');

    badge.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

    footer.style.display = 'block';
    totalCount.textContent = cart.length;

    const total = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/\D/g, ''));
        return sum + price * item.qty;
    }, 0);
    totalPrice.textContent = total.toLocaleString('vi-VN') + 'đ';

    list.innerHTML = cart.map(item => `
        <li class="header__cart-item">
            <img src="${item.img}" alt="" class="header__cart-item-img">
            <div class="header__cart-item-info">
                <p class="header__cart-item-name">${item.name}</p>
                <span class="header__cart-item-qty">Số lượng: ${item.qty}</span><br>
                <span class="header__cart-item-price">${item.price}</span>
            </div>
            <button class="header__cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
    `).join('');
}

renderCart();