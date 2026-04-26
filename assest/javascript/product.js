document.querySelectorAll('.product-section').forEach(section => {
  const track = section.querySelector('.product-slider__track');
  const prevBtn = section.querySelector('.product-section__btn--prev');
  const nextBtn = section.querySelector('.product-section__btn--next');

  if (!track || !prevBtn || !nextBtn) return;

  let index = 0;

  function measure() {
    const cards = Array.from(track.querySelectorAll('.product-card'));
    const firstCard = cards[0];
    if (!firstCard) return null;

    const cardW = firstCard.getBoundingClientRect().width;

    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.gap || styles.columnGap || '0') || 0;

    const viewport = track.parentElement; 
    const viewportW = viewport.getBoundingClientRect().width;

    const visibleCards = Math.max(1, Math.round(viewportW / cardW));
    const maxIndex = Math.max(0, cards.length - visibleCards);
    const step = cardW + gap;

    return { cards, step, visibleCards, maxIndex };
  }

  function applyTransform(step) {
    track.style.transform = `translateX(-${index * step}px)`;
  }

  function sync() {
    const m = measure();
    if (!m) return;

    index = Math.min(Math.max(0, index), m.maxIndex);
    applyTransform(m.step);

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === m.maxIndex;
  }

  prevBtn.onclick = () => {
    const m = measure();
    if (!m) return;

    index = Math.max(0, index - 1);
    applyTransform(m.step);

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === m.maxIndex;
  };

  nextBtn.onclick = () => {
    const m = measure();
    if (!m) return;

    index = Math.min(m.maxIndex, index + 1);
    applyTransform(m.step);

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === m.maxIndex;
  };

  sync();
  window.addEventListener('resize', () => {
    requestAnimationFrame(sync);
  });
});

document.querySelectorAll('.product-card').forEach(card => {
  const id = card.dataset.id;
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    window.location.href = `/product.html?id=${id}`;
  });
});

document.querySelectorAll('.product-card__btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.product-card');
    if (!card) return;

    const id = parseInt(card.dataset.id, 10);
    const product = products.find(p => p.id === id);
    if (product) addToCart(product, 1);
  });
});