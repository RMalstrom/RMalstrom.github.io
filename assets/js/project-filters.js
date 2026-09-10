(() => {
  const filters = document.querySelector('.project-filters');
  if (!filters) return;
  const cards = [...document.querySelectorAll('.project-card')];
  const buttons = [...filters.querySelectorAll('button')];
  const count = filters.querySelector('.filter-count');
  const select = (button) => {
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
    const visible = cards.filter(card => !card.hidden).length;
    count.textContent = `${visible} project${visible === 1 ? '' : 's'}`;
  };
  buttons.forEach(button => button.addEventListener('click', () => select(button)));
  select(buttons[0]);
  filters.hidden = false;
})();
