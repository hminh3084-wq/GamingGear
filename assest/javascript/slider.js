const track = document.querySelector('.slider__track');
const dots = document.querySelectorAll('.slider__dot');
let current = 0;
const total = document.querySelectorAll('.slider__item').length;

function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach(d => d.classList.remove('slider__dot--active'));
    dots[current].classList.add('slider__dot--active');
}

document.querySelector('.slider__btn--prev').onclick = () => goTo(current - 1);
document.querySelector('.slider__btn--next').onclick = () => goTo(current + 1);
dots.forEach((dot, i) => dot.onclick = () => goTo(i));

// tự chạy mỗi 4 giây
let timer = setInterval(() => goTo(current + 1), 4000);
track.parentElement.addEventListener('mouseenter', () => clearInterval(timer));
track.parentElement.addEventListener('mouseleave', () => {
    timer = setInterval(() => goTo(current + 1), 4000);
});