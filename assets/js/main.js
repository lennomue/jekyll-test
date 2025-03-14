// ページヘッダーを動かす
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // ページトップでは常にヘッダーを表示
    if (scrollTop === 0) {
        header.classList.remove('header--hidden');
        lastScrollTop = scrollTop;
        return;
    }

    if (scrollTop > lastScrollTop) {
        // 下スクロール時
        header.classList.add('header--hidden');
    } else {
        // 上スクロール時
        header.classList.remove('header--hidden');
    }
    
    lastScrollTop = scrollTop;
});


// Math系のライブラリを必要なら読み込むようにする
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("details summary").forEach(summary => {
        summary.addEventListener("click", function() {
            if (window.MathJax) {
                MathJax.typesetPromise();
            }
        });
    });
});