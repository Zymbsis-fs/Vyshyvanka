import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import lightboxIcons from '../img/icons.svg';

const navigationElem = document.querySelector('.header-nav');
const addressElem = document.querySelector('.header-address');
const mobMenuBtnOpen = document.querySelector('.open-menu-btn');

const mobMenuMarkup = `<div class="mobMenu-container">
      <button type="button" class="mobMenu-button-close">
      <svg width="18" height="18" class="mobMenu-icon-close">
      <use href=${lightboxIcons}#menu-close></use>
      </svg>
      </button>
      <address class="mobMenu-address">${addressElem.innerHTML}
      </address>
      <nav class="mobMenu-nav-list">
      ${navigationElem.innerHTML}
      </nav>
    </div>`;

const mobMenuInstance = basicLightbox.create(mobMenuMarkup, {
  className: 'mobMenu-lightbox',
  onClose: i => document.body.classList.remove('scroll-ban'),
});

const refsMobMenu = {
  closeButton: mobMenuInstance.element().querySelector('.mobMenu-button-close'),
  navList: mobMenuInstance.element().querySelector('.header-nav-list'),
};

mobMenuBtnOpen.addEventListener('click', () =>
  mobMenuInstance.show(showMobMenu)
);

function closeMobMenu() {
  mobMenuInstance.close();
}

function showMobMenu() {
  document.body.classList.add('scroll-ban');
  refsMobMenu.closeButton.addEventListener('click', closeMobMenu);
  refsMobMenu.navList.addEventListener('click', onLinkClick);
}

function onLinkClick(e) {
  if (e.target !== e.currentTarget) {
    e.preventDefault();
    const scrollTarget = document.querySelector(
      e.target.getAttribute('href') ||
        e.target.firstElementChild.getAttribute('href')
    );

    const valueForScroll =
      Math.round(scrollTarget.getBoundingClientRect().top) -
      (scrollTarget.id === 'order' ? 80 : 60);

    window.scrollBy({ top: valueForScroll, behavior: 'smooth' });
    closeMobMenu();
  }
}
