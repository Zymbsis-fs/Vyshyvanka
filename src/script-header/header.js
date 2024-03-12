const headerNavList = document.querySelector('.header-nav-list');
headerNavList.addEventListener('click', onNavListClick);
function onNavListClick(e) {
  if (e.currentTarget !== e.target) {
    e.preventDefault();
    const scrollTarget = document.querySelector(
      e.target.getAttribute('href') ||
        e.target.firstElementChild.getAttribute('href')
    );

    const valueForScroll =
      Math.round(scrollTarget.getBoundingClientRect().top) -
      (scrollTarget.id === 'order' ? 100 : 60);

    window.scrollBy({ top: valueForScroll, behavior: 'smooth' });
  }
}
export default onNavListClick;
