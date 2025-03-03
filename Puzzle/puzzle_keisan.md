<div style="height: 30px; background-color:rgb(255, 255, 255);"></div>

---
[TOP](../README.md) > [保管庫](../SUMMARY.md) > [パズル](./puzzle_home.md) > [計算](./puzzle_keisan.md)

---
# パズル！ - 計算
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

- [パズル！ - 計算](#パズル---計算)
    - [ひもで時間計測](#ひもで時間計測)
    - [ピッタリ水汲み](#ピッタリ水汲み)

---
### ひもで時間計測
Q. ちょうど1時間で燃えるひもが2本あります。マッチとひもを使って45分を計測してください。ひもに目印をつけたりはできません。
<details>
  <summary> ヒント </summary>
  1時間以外を計測するためにできることを探す。<br>
  両端から同時に火をつけることで半分の時間を計測できることに気付けるかが勝負である。
</details>
<details>
  <summary> 答え </summary>
  初めに火を3箇所(一本目の両端と二本目の片端)につけて、一本目が燃え切った時点で30分が計測できる。そのタイミングで二本目の端に火をつけることで、残り30分の半分である15分を加え、目標の45分が測れる。
</details>

---
### ピッタリ水汲み
Q. 5Lと3Lの容器が一つずつあります。これを用いて以下の2操作だけで4Lを計量してください。
- 水を満杯まで入れる
- 水を全て捨てる
- 他方が満杯になるまで移す
<details>
  <summary> ヒント </summary>
  4Lを(3+1)Lと見るなら1Lを作りたい。<br>
  他にも(5-1)Lと見るなら5L満杯から3L容器に1L入れることを考える。その時の3L容器に2Lだけあれば良い。<br>
  つまり3, 5以外にも1, 2Lの水を作ることを目標にする。
</details>
<details>
  <summary> 答え </summary>

  解法は一つではないですのであくまで2つ例を紹介します。
  <ul>
    <li>5L容器を満杯にし、3L容器に移す</li>
    <li>3L容器の水を捨てて、5L容器に残った2Lを3L容器に移す</li>
    <li>5L容器を満杯にし、3L容器に1L分移すことで5L容器に4L残る。</li>
  </ul>

  他の解法としても

  <ul>
    <li>3L容器を満たして、5L容器に移す。</li>
    <li>もう一度3L容器を満たして5L容器に2L分移す。</li>
    <li>5L容器を空にして、3L容器に残った1L分を5Lに移す。</li>
    <li>3L容器を満たして5L容器に移して4Lとなる。</li>
  </ul>

  <p style="color: gray;">図解はいつかきっと、、</p>

</details>

---