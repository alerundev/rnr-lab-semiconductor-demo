import './style.css';

const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  mobileNav.hidden = !open;
  document.body.classList.toggle('menu-open', open);
}

toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
mobileNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) setMenu(false);
});
