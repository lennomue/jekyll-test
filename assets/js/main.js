// ページヘッダーを動かす
let lastScrollTop = 0;
const header = document.querySelector('.header');
const scrollThreshold = 10;  // スクロールの閾値を増加
let isScrolling;  // スクロール中かどうかを追跡

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // ページトップではヘッダーを常に表示
    if (scrollTop <= 0) {
        header.classList.remove('header--hidden');
        lastScrollTop = scrollTop;
        return;
    }

    // スクロール中のタイマーをクリア
    window.clearTimeout(isScrolling);

    // スクロールが終了したと判断するまで待機
    isScrolling = setTimeout(() => {
        // スクロールが上向きで、かつ大きな移動量の場合のみヘッダーを表示
        if (scrollTop < lastScrollTop && Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
            header.classList.remove('header--hidden');
        }
    }, 66);  // スクロール終了判定の待機時間

    // 下スクロール時のみヘッダーを隠す
    if (scrollTop > lastScrollTop && Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
        header.classList.add('header--hidden');
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