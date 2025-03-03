<div style="height: 30px; background-color:rgb(255, 255, 255);"></div>

---
[TOP](../README.md) > [保管庫](../SUMMARY.md) > [パズル](./puzzle_home.md)

---
# パズル！
---
<p style="color: gray; font-size: 12px;">
最終更新(2025/02/27)　投稿日(2025/01/12)
</p>

<style>
.header {
    position: fixed; /* 画面上部に固定 */
    top: 0;
    left: 0;
    width: 100%;
    height: 60px; /* ヘッダーの高さ */
    background-color: rgba(248, 254, 83, 0.31); /* 背景色（濃いグレー） */
    color: #fff; /* テキスト色（白） */
    display: flex; /* フレックスボックスでレイアウト */
    align-items: center; /* 縦方向中央揃え */
    justify-content: center; /* 左右に要素を配置 */
    box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1); /* 軽い影 */
    z-index: 1000; /* 他の要素より前面に表示 */
    transition: transform 0.3s ease-in-out; /* スムーズなアニメーション */
}

.header--hidden {
    transform: translateY(-100%);
}

/* ロゴ画像のスタイル */
.header img {
    height: 40px; /* ロゴ画像の高さ */
    cursor: pointer; /* クリック可能なポインターを表示 */
    transition: transform 0.3s ease; /* ホバー時のアニメーション */
    background-color: transparent; /* 背景を透明に指定 */
    image-rendering: auto; /* PNG画像のレンダリング設定 */
}
.info-section {
    background-color: #f4f4f4;
    border: 2px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 各リンクのスタイル */
.info-section a {
    text-decoration: none;
    color:rgb(28, 126, 231);
    font-weight: bold;
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

.info-section a:hover {
    color:rgb(98, 171, 245);
    text-shadow: 0 0 5px rgba(109, 175, 250, 0.6);
}

/* 強調された文のスタイル */
.info-section p {
    margin: 5px 0;
    color: #000;
    font-size: 1em;
}
</style>

<div class="header">
    <a href="https://tokozemi.securesite.jp/">
        <img src="../Image/tokozemi_logo_touka.PNG" alt="サイトロゴ">
    </a>
</div>

<script type="text/javascript">
{
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
}
</script>

<div class="info-section">
    <p>子供から大人まで楽しめます。ぜひ粘り強く考えてください！<br>
    頭の体操が好きな方は「みたことある！」となるかもしれません。</p>
</div>

- [計算](./puzzle_keisan.md)
- [図形](./puzzle_zukei.md)
- その他

---