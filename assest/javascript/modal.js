const loginBtn = document.querySelector('.header__login');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const loginForm = document.querySelector('.auth-form--login');
const registerForm = document.querySelector('.auth-form--register');
const switchBtns = document.querySelectorAll('.auth-form__switch-btn');

// mở modal login
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
});

// đóng modal
modalOverlay.addEventListener('click', () => {
    modal.classList.remove('active');
});

// switch giữa login và register
switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        loginForm.classList.toggle('active');
        registerForm.classList.toggle('active');
    });
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, msg) {
    let err = input.parentElement.querySelector('.auth-form__error');
    if (!err) {
        err = document.createElement('span');
        err.className = 'auth-form__error';
        input.parentElement.appendChild(err);
    }
    err.textContent = msg;
    input.style.borderColor = 'red';
}

function clearError(input) {
    const err = input.parentElement.querySelector('.auth-form__error');
    if (err) err.textContent = '';
    input.style.borderColor = '';
}

function closeModal() {
    modal.classList.remove('active');
    modal.querySelectorAll('input').forEach(input => input.value = '');
    modal.querySelectorAll('.auth-form__error').forEach(err => err.textContent = '');
    modal.querySelectorAll('input').forEach(input => input.style.borderColor = '');
}

// nút Trở lại
document.querySelectorAll('.auth-form__control-back').forEach(btn => {
    btn.addEventListener('click', closeModal);
});

// validate + submit login
loginForm.querySelector('.btn--primary').addEventListener('click', () => {
    const email = loginForm.querySelector('input[type="text"]');
    const pass = loginForm.querySelector('input[type="password"]');
    let valid = true;

    clearError(email); clearError(pass);

    if (!isValidEmail(email.value)) {
        showError(email, 'Email không hợp lệ'); valid = false;
    }
    if (pass.value.length < 6) {
        showError(pass, 'Mật khẩu tối thiểu 6 ký tự'); valid = false;
    }
    if (valid) closeModal(); 
});

// validate + submit register
registerForm.querySelector('.btn--primary').addEventListener('click', () => {
    const email = registerForm.querySelector('input[type="text"]');
    const inputs = registerForm.querySelectorAll('input[type="password"]');
    const pass = inputs[0], repass = inputs[1];
    let valid = true;

    clearError(email); clearError(pass); clearError(repass);

    if (!isValidEmail(email.value)) {
        showError(email, 'Email không hợp lệ'); valid = false;
    }
    if (pass.value.length < 6) {
        showError(pass, 'Mật khẩu tối thiểu 6 ký tự'); valid = false;
    }
    if (repass.value !== pass.value) {
        showError(repass, 'Mật khẩu không khớp'); valid = false;
    }
    if (valid) closeModal(); 
});