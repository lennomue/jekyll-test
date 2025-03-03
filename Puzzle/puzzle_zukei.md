---
layout: default
mathjax: true
header_style_puzzle: true
header_script: true
---

<div style="height: 30px; background-color:rgb(255, 255, 255);"></div>

---
[TOP](../README.md) > [保管庫](../SUMMARY.md) > [パズル](./puzzle_home.md) > [図形](./puzzle_zukei.md)

---
# パズル！ - 図形
---
<p style="color: gray; font-size: 12px;">
最終更新(2025/02/27)　投稿日(2025/2/26)
</p>

<!-- <style>
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
</style> -->

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

- [パズル！ - 図形](#パズル---図形)
    - [面積を求めよう-1](#面積を求めよう-1)
    - [面積を求めよう-2](#面積を求めよう-2)
    - [角度は？](#角度は)


---
### 面積を求めよう-1
Q. 次の斜線部の面積は？
<div style="text-align: center;">
    <img src="../Image/puzzle/zukei/puzzle_zukei_menseki_01_q.png" width="300px">
</div>
<details>
  <summary> ヒント </summary>
  正方形と斜線部の面積比を考える
  <div style="text-align: center;">
    <img src="../Image/puzzle/zukei/puzzle_zukei_menseki_01_a_01.png" width="150px">
  </div>
</details>
<details>
    <summary> 答え </summary>
    <div style="text-align: center;">
    <img src="../Image/puzzle/zukei/puzzle_zukei_menseki_01_a_02.png" width="150px">
    <img src="../Image/puzzle/zukei/puzzle_zukei_menseki_01_a_03.png" width="150px">
  </div>
  <p>このように見れば \( (正方形)\times\frac{5}{4} = (斜線部) \) となる。<br>
  また\((三角形全体) = (正方形)+(斜線部) = \frac{9}{5}\times(斜線部)\)であり、同時に<br>
  \((三角形全体) = \frac{1}{2}\times6\times6=18\)である。<br>
  以上から\((斜線部) = \frac{5}{9}\times(三角形全体) = 10\)</p>
</details>

---
### 面積を求めよう-2
Q. 次の斜線部の面積は？
<div style="text-align: center;">
    <img src="../Image/puzzle/zukei/puzzle_zukei_menseki_02_q.png" width="300px">
</div>
<details>
  <summary> ヒント </summary>
  5の長さをそのまま中心部に移動する
  <div style="text-align: center;">
    <img src="../Image/puzzle/zukei/puzzle_zukei_menseki_02_a_01.png" width="150px">
  </div>
</details>
<details>
    <summary> 答え </summary>
    <div style="text-align: center;">
    <img src="../Image/puzzle/zukei/puzzle_zukei_menseki_02_a_02.png" width="150px">
    <img src="../Image/puzzle/zukei/puzzle_zukei_menseki_02_a_03.png" width="150px">
  </div>
  <p>このように見れば中心の正方形の対角線の長さが\(10\)とわかる<br>
  従って面積は\(\frac{1}{2}\times10\times10=50\)</p>
</details>

---
### 角度は？
Q. 次の図の「?」の角度は？
<div style="text-align: center;">
    <img src="../Image/puzzle/zukei/puzzle_zukei_kakudo_01_q.png" width="300px">
</div>
<details>
    <summary> 答え </summary>
    <div style="text-align: center;">
    <img src="../Image/puzzle/zukei/puzzle_zukei_kakudo_01_a_01.png" width="150px">
  </div>
  <p>この補助線によって上側2辺を見ると、直角かつ同じ長さである。<br>
  従って\(90°,45°,45°\)の三角形とわかる。求めるのは\(45°\)</p>
</details>

---