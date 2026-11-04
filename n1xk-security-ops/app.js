const filter = document.querySelector('#filter');
const rows = [...document.querySelectorAll('#incidentRows tr')];
filter.addEventListener('change', () => {
  rows.forEach(row => row.hidden = filter.value !== 'all' && row.dataset.level !== filter.value);
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  document.querySelectorAll('nav a').forEach(item => item.classList.remove('active'));
  link.classList.add('active');
}));
