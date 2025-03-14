// ページヘッダーを動かす
let lastScrollTop = 0;
const header = document.querySelector('.header');
const scrollThreshold = 5;  // スクロールの閾値を設定

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // ページトップではヘッダーを常に表示
    if (scrollTop <= 0) {
        header.classList.remove('header--hidden');
        lastScrollTop = scrollTop;
        return;
    }

    // 小さなスクロール量は無視
    if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) {
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