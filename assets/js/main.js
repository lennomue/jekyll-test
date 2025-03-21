// ページヘッダーを動かす
let lastScrollTop = 0;
const header = document.querySelector('.header');

// ヘッダーの表示状態を更新する関数
function updateHeaderVisibility() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop === 0) {
        header.classList.remove('header--hidden');
    }
}

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

    // スクロール後にヘッダーの表示状態を更新
    updateHeaderVisibility();
});

// 定期的にヘッダーの表示状態を確認・更新
setInterval(updateHeaderVisibility, 100);

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