// Тема (сохраняем предпочтение пользователя)
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if(savedTheme){ root.setAttribute('data-theme', savedTheme); }
themeToggle?.addEventListener('click', ()=>{
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Год в футере
document.getElementById('y').textContent = new Date().getFullYear();

// Имитация отправки формы (потом замените на реальный обработчик)
const form = document.querySelector('form');
const note = document.getElementById('formNote');
form?.addEventListener('submit', () => {
  note.textContent = 'Спасибо! Сообщение не отправлено (демо), подключите обработчик.';
});

// Адаптивное меню
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('nav.nav-links');
const mq = window.matchMedia('(max-width: 800px)');
function applyNav(){
  if(mq.matches){
    navLinks.style.display = 'none';
    menuToggle?.classList.add('menu');
    menuToggle?.addEventListener('click', ()=>{
      const visible = navLinks.style.display === 'grid';
      navLinks.style.display = visible ? 'none' : 'grid';
      navLinks.style.gridAutoFlow = 'row';
      navLinks.style.gap = '8px';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '64px';
      navLinks.style.right = '16px';
      const styles = getComputedStyle(document.body);
      navLinks.style.background = styles.getPropertyValue('--card');
      navLinks.style.border = '1px solid ' + styles.getPropertyValue('--border');
      navLinks.style.padding = '10px';
      navLinks.style.borderRadius = '12px';
      navLinks.style.boxShadow = styles.getPropertyValue('--shadow');
    }, { once: true });
  } else {
    navLinks.removeAttribute('style');
  }
}
applyNav();
mq.addEventListener('change', applyNav);
