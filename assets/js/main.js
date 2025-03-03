let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // 下スクロール時
        header.classList.add('header--hidden');
    } else {
        // 上スクロール時
        header.classList.remove('header--hidden');
    }
    
    lastScrollTop = scrollTop;
});