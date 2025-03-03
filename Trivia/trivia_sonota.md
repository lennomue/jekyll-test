<div style="height: 30px; background-color:rgb(255, 255, 255);"></div>

---
[TOP](../README.md) > [保管庫](../SUMMARY.md) > [トリビア](./trivia_home.md) > [難読漢字](./trivia_kanji.md)

---
# トリビア！ - その他

---
<p style="color: gray; font-size: 12px;">
最終更新(2025/02/26)　投稿日(2025/01/12)
</p>

<style>
.header {
    position: fixed; /* 画面上部に固定 */
    top: 0;
    left: 0;
    width: 100%;
    height: 60px; /* ヘッダーの高さ */
    background-color: rgba(255, 179, 158, 0.31); /* 背景色（濃いグレー） */
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

- [トリビア！ - その他](#トリビア---その他)
    - [昼過ぎの眠気](#昼過ぎの眠気)
    - [どっちが早く転がる？](#どっちが早く転がる)

---
### 昼過ぎの眠気
Q. 午後に眠くなるという傾向を英語でなんというか？
<details>
  <summary> 答え </summary>
  <ul>
    <li>アフタヌーンディップ</li>
    <li>ポストランチディップ</li>
  </ul>  
</details>
<details>
  <summary> 解説 </summary>
  ほぼ直訳、dipは落ち込むといった意味である。<br>
  午後の眠気は食事による血糖値の上昇が要因と考えやすいが、食事がなくても昼過ぎに眠気が来るという実験があったそうで、じゃ眠くたって仕方ないじゃない！
</details>

---
### どっちが早く転がる？
Q. 中身が液体のコーヒー缶と凍らせた缶、どちらが早く坂を転がるでしょうか？
<details>
  <summary> 答え </summary>
  凍ったものは転がる際に中身を持ち上げる必要がある一方、液体の缶は液体が下側に止まりながら落下する。このため液体の缶の方が重心を低く保って落下することが理由である。高校で学ぶ位置エネルギーをと運動エネルギーが理解の助けになる<br>
  実際に実験した映像も参考に！
  <div style="text-align: center;">
  <iframe width="384" height="682" src="https://www.youtube.com/embed/bCZqEM8l0qo" title="どっちが早く転がる？" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</details>

---