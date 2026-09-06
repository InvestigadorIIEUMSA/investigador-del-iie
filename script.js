const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const search = document.querySelector('#site-search');
const records = [...document.querySelectorAll('#search-results article')];
const empty = document.querySelector('#empty-state');

search?.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLocaleLowerCase('es');
  let visible = 0;
  records.forEach((record) => {
    const matches = !query || record.dataset.search.toLocaleLowerCase('es').includes(query);
    record.hidden = !matches;
    if (matches) visible += 1;
  });
  empty.hidden = visible !== 0;
});
