/* =============================================
   RUNWISE — main.js
   ============================================= */

/* ---------- Header: efeito ao rolar ---------- */
const header = document.querySelector('header');

function handleScroll() {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

/* ---------- Nav: marca o link ativo ---------- */
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  if (link.getAttribute('href') === '#' + location.hash.slice(1)) {
    link.classList.add('active');
  }
});

/* ---------- Botão voltar ao topo ---------- */
const btnTopo = document.getElementById('btn-topo');

if (btnTopo) {
  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Dropdown de idioma ---------- */
function toggleLang() {
  const btn = document.getElementById('lang-btn');
  const dropdown = document.getElementById('lang-dropdown');
  btn.classList.toggle('open');
  dropdown.classList.toggle('open');
}

function selectLang(event, lang) {
  event.stopPropagation();
  document.getElementById('lang-selected').textContent = lang;
  document.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('lang-btn').classList.remove('open');
  document.getElementById('lang-dropdown').classList.remove('open');
}

/* Fecha o dropdown ao clicar fora */
document.addEventListener('click', function(e) {
  const btn = document.getElementById('lang-btn');
  if (btn && !btn.contains(e.target)) {
    btn.classList.remove('open');
    document.getElementById('lang-dropdown').classList.remove('open');
  }
});