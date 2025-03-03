<div style="height: 30px; background-color:rgb(255, 255, 255);"></div>

---
[TOP](./README.md) > [保管庫](./SUMMARY.md)

---
# 保管庫

---
<p style="color: gray; font-size: 12px;">
最終更新(2025/02/26)　投稿日(2025/01/12)
</p>

<style>
/* 全体のスタイル */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgba(160, 200, 255, 0.31);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: transform 0.3s ease; /* ヘッダーのアニメーション用 */
}

/* スクロール時のヘッダー非表示用クラス */
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
        <img src="./Image/tokozemi_logo_touka.PNG" alt="サイトロゴ">
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

* [トップ](./README.md)

<!-- * [過去の掲載](./Puzzle/puzzle_2025)
  * 過去の掲載リンクはここに -->

* [パズル](./Puzzle/puzzle_home.md)
  * [計算](./Puzzle/puzzle_keisan.md)
  * [図形](./Puzzle/puzzle_zukei.md)
  *  その他

* [トリビア](./Trivia/trivia_home.md)
  * [難読漢字](./Trivia/trivia_kanji.md)
    * [動物/植物/生物](./Trivia/trivia_kanji.md#-動物植物生物-) 
    * [四字熟語](./Trivia/trivia_kanji.md#-四字熟語-)
    * [その他](./Trivia/trivia_kanji.md#-その他-)
  * 人物
    * 日本
    * 海外
  * 建築/地理
    * 日本
    * 海外
  * [もの/文化/作品](./Trivia/trivia_mono.md)
    * [日本文化](./Trivia/trivia_mono.md#-日本文化-)
    * [海外文化](./Trivia/trivia_mono.md#-海外文化-)
  * [その他](./Trivia/trivia_sonota.md)
