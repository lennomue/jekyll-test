<!-- 以下のscriptによってコンパイルで文字を確認するためのコード
実装ではincludesとlayoutsで可能 -->
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("details summary").forEach(summary => {
        summary.addEventListener("click", function() {
            if (window.MathJax) {
                MathJax.typesetPromise();
            }
        });
    });
});
</script>

<div style="height: 30px; background-color:rgb(255, 255, 255);"></div>

---
[TOP](./README.md)

---
# クイズまとめサイト!

---

<p style="color: gray; font-size: 12px;">
最終更新(2025/02/27)　投稿日(2025/01/12)
</p>

<style>
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
.info-section .acc {
    text-decoration: none;
    color:rgb(242, 121, 34);
    font-weight: bold;
    transition: color 0.3s ease, text-shadow 0.3s ease;
    text-decoration:underline;
}

.info-section .acc:hover {
    color:rgb(251, 189, 33);
    text-shadow: 0 0 5px rgba(239, 245, 128, 0.6);
}

/* 強調された文のスタイル */
.info-section p {
    margin: 5px 0;
    color: #000;
    font-size: 1em;
}
</style>


<!-- <script src="script.js"></script> -->
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

<!-- htmlタグからのhrefをする際には、github pagesがレンダーしたのちの~.htmlで指定します -->
<div class="info-section">
    <p>・<a class="acc" href="#どっちが早く転がる">現在掲載中の問題へ!</a></p>
    <p>・今までの問題の <a href="./SUMMARY.html">保管庫へ</a></p>
    <p>・このサイトでは<a href="./Puzzle/puzzle_home.html">パズル</a>や<a href="./Trivia/trivia_home.html">トリビア</a>クイズをまとめています。</p>
    <!-- コメントアウトされた箇所はそのまま -->
    <!-- <p>左の目次バーからジャンル毎の出題も見れます。</p> -->
    <p>・上部のパンくずリストの<a>TOP</a>でここに戻れます。</p>
</div>

<!-- cssを埋め込む！ ここまで-->

[](将来的にはhtml、cssで描きたいな〜画像とかボタンとか。。)

---

- [クイズまとめサイト!](#クイズまとめサイト)
  - [-パズル-](#-パズル-)
    - [ひもで時間計測](#ひもで時間計測)
    - [ピッタリ水汲み](#ピッタリ水汲み)
    - [面積を求めよう-1](#面積を求めよう-1)
    - [面積を求めよう-2](#面積を求めよう-2)
    - [角度は？](#角度は)
  - [-トリビア-](#-トリビア-)
    - [そば処の"おばけ"](#そば処のおばけ)
    - [ものの数え方 ~ お箸は一膳 ~](#ものの数え方--お箸は一膳-)
    - [どっちが早く転がる？](#どっちが早く転がる)
  - [参考としているサイト群](#参考としているサイト群)

---
## -パズル-
---

### ひもで時間計測
Q. ちょうど1時間で燃えるひもが2本あります。マッチとひもを使って45分を計測してください。ひもに目印をつけたりはできません。
<details>
  <summary> ヒント </summary>
  1時間以外を計測するためにできることを探す。<br>
  両端から同時に火をつけることで半分の時間を計測できることに気付けるかが勝負である。
</details>
<details>
  <summary> 回答 </summary>
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
  <summary> 回答 </summary>

  回答は一つではないですのであくまで2つ例を紹介します。
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
### 面積を求めよう-1
Q. 次の斜線部の面積は？
<div style="text-align: center;">
    <img src="./Image/puzzle/zukei/puzzle_zukei_menseki_01_q.png" width="300px">
</div>
<details>
  <summary> ヒント </summary>
  正方形と斜線部の面積比を考える
  <div style="text-align: center;">
    <img src="./Image/puzzle/zukei/puzzle_zukei_menseki_01_a_01.png" width="150px">
  </div>
</details>
<details>
    <summary> 答え </summary>
    <div style="text-align: center;">
    <img src="./Image/puzzle/zukei/puzzle_zukei_menseki_01_a_02.png" width="150px">
    <img src="./Image/puzzle/zukei/puzzle_zukei_menseki_01_a_03.png" width="150px">
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
    <img src="./Image/puzzle/zukei/puzzle_zukei_menseki_02_q.png" width="300px">
</div>
<details>
  <summary> ヒント </summary>
  5の長さをそのまま中心部に移動する
  <div style="text-align: center;">
    <img src="./Image/puzzle/zukei/puzzle_zukei_menseki_02_a_01.png" width="150px">
  </div>
</details>
<details>
    <summary> 答え </summary>
    <div style="text-align: center;">
    <img src="./Image/puzzle/zukei/puzzle_zukei_menseki_02_a_02.png" width="150px">
    <img src="./Image/puzzle/zukei/puzzle_zukei_menseki_02_a_03.png" width="150px">
  </div>
  <p>このように見れば中心の正方形の対角線の長さが\(10\)とわかる<br>
  従って面積は\(\frac{1}{2}\times10\times10=50\)</p>
</details>

---
### 角度は？
Q. 次の図の「?」の角度は？
<div style="text-align: center;">
    <img src="./Image/puzzle/zukei/puzzle_zukei_kakudo_01_q.png" width="300px">
</div>
<details>
    <summary> 答え </summary>
    <div style="text-align: center;">
    <img src="./Image/puzzle/zukei/puzzle_zukei_kakudo_01_a_01.png" width="150px">
  </div>
  <p>この補助線によって上部2辺を見ると、直角かつ同じ長さである。<br>
  従って90°-45°-45°の三角形とわかる。求めるのは45°</p>
</details>

---
## -トリビア-

---
### そば処の"おばけ"
Q. そば/うどん屋のメニューに「おばけ」というものがある。どのような料理か？
<details>
  <summary> 答え </summary>
  油揚げと揚げ玉が両方乗せられたもの
</details>
<details>
  <summary> 解説 </summary>
  日本では料理の名称や、同名の料理でも調理法に地域差がある。<br>
  関東で「きつね」というと油揚げ、「たぬき」というと天かすの乗ったものを指すことが多い。この二種の動物は共に「化かす」動物であり、それが由来とされる。<br>
  なぜ狐が油揚げを指すのか、一つは油揚げがきつね色であることが理由だそう。他にも「いなり寿司」と稲荷のきつねとの関係なども調べてみよう
</details>

---
### ものの数え方 ~ お箸は一膳 ~
Q. 次のものを数える時に共通する単位は？

<ol>
  <li>はさみ,豆腐<br>
    <details>
    <summary> 答え </summary>
    ・丁(ちょう)
    </details>
  </li>

  <li>鳥居,ピラミッド<br>
    <details>
    <summary>答え</summary>
    ・基(き)
    </details>
  </li>

  <li>昆布,鰹節<br>
    <details>
    <summary>答え</summary>
    ・連(れん)
    </details>
  </li>
</ol>

---

---
### どっちが早く転がる？
Q. 中身が液体のコーヒー缶と凍らせた缶、どちらが早く坂を転がるでしょうか？
<details>
  <summary> 答え </summary>
  <div style="text-align: center;">
  <iframe width="384" height="682" src="https://www.youtube.com/embed/bCZqEM8l0qo" title="どっちが早く転がる？" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</details>

---
## 参考としているサイト群
- [goo辞書](https://dictionary.goo.ne.jp/)
- [Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8)
- [四字熟語辞典オンライン](https://yoji.jitenon.jp/)
- [ド文系でも楽しい【ゆっくり数学の雑学】](https://youtube.com/@yukkuri_suugaku?si=2T8hw85K5uSuZebs)