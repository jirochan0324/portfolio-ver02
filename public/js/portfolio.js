// header----nav
$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
});

//  scroll-oneyse
var target = document.getElementById("element");

// スクロールイベントのハンドラー
function handleScroll() {
    var rect = target.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // 要素が画面内に表示されているか確認
    if (rect.top < windowHeight) {
        // 要素が画面内に表示された場合の処理
        target.style.opacity = "1"; // 透明度を1に変更
        // スクロールイベントを削除することで、一度のみ処理されるようにする
        window.removeEventListener("scroll", handleScroll);
    }
}

// 初回のスクロールイベントの実行
handleScroll();

// スクロールイベントのリスナーを追加
window.addEventListener("scroll", handleScroll);
