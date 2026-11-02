(() => {
  const cards = [...document.querySelectorAll('[data-news-card]')];
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const search = document.querySelector('#news-search');
  const empty = document.querySelector('#empty-state');
  let active = 'all';

  function update() {
    const term = (search?.value || '').trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const category = card.dataset.category || '';
      const text = card.textContent.toLowerCase();
      const matchesCategory = active === 'all' || category === active;
      const matchesSearch = !term || text.includes(term);
      const visible = matchesCategory && matchesSearch;
      card.hidden = !visible;
      if (visible) shown++;
    });
    if (empty) empty.style.display = shown ? 'none' : 'block';
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    active = button.dataset.filter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    update();
  }));
  search?.addEventListener('input', update);
  update();
})();
