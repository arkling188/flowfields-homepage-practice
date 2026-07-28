const navLinks = document.querySelectorAll('.main-nav a');


navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    navLinks.forEach((item) => item.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
});


/* 页面所有右箭头按钮：点击切换为激活态 SVG */
const ARROW_NORMAL = './assets/images/圆圈右箭头.svg';
const ARROW_ACTIVE = './assets/images/圆圈右箭头激活.svg';

document.querySelectorAll('.round-button, .product-name button, .news-card button').forEach((button) => {
  button.addEventListener('click', () => {
    /* 复位上一个激活箭头 */
    const prev = document.querySelector('.arrow-active');
    if (prev) {
      prev.classList.remove('arrow-active');
      const prevImg = prev.querySelector('img');
      if (prevImg) prevImg.src = ARROW_NORMAL;
    }

    /* 当前按钮激活 */
    button.classList.add('arrow-active');
    const img = button.querySelector('img');
    if (img) img.src = ARROW_ACTIVE;

    /* 产品卡额外处理：切换容器激活态与 aria-pressed */
    const card = button.closest('.product-card');
    if (card) {
      const prevCard = document.querySelector('.product-card.is-active');
      if (prevCard) prevCard.classList.remove('is-active');
      card.classList.add('is-active');

      const prevPressed = document.querySelector('.product-name button[aria-pressed="true"]');
      if (prevPressed) prevPressed.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-pressed', 'true');
    }
  });
});



const language = document.querySelector('.language');
const languageToggle = language.querySelector('.language-toggle');

languageToggle.addEventListener('click', () => {
  language.classList.toggle('open');
  languageToggle.setAttribute('aria-expanded', language.classList.contains('open'));
});
document.querySelectorAll('.language-menu button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.language-menu .is-selected').classList.remove('is-selected');
    button.classList.add('is-selected');
    languageToggle.querySelector('span').textContent = button.dataset.language;
    language.classList.remove('open');
    languageToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.why-tabs button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.why-tabs .selected').classList.remove('selected');
    button.classList.add('selected');
  });
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.reset();
});
