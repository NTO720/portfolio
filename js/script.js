// PhotoSwipe
initPhotoSwipeFromDOM(".js-my-gallery");

$(function () {
  //iOS対策
  //iOSでは疑似要素を含むaタグのリンクは２回タップしないと遷移とページ内スクロールをしないため、
  //ユーザーエージェント判定でiOSの場合はbodyタグにiosを付与し、対象の疑似要素をdisplay: noneする
  var ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) {
    $("body").addClass("ios");
  }

  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要 (;´･ω･)ｳｰﾝ･･･
  $(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

//マウスカーソル
var cursor = $(".cursor"),
  cWidth = 20, //カーソルの大きさ
  mouseX = 0, //マウスのX座標
  mouseY = 0; //マウスのY座標
$(document).on("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  cursor.css({
    //カーソルの真ん中に座標軸が来るよう、
    //カーソルの大きさの半分を引きます
    left: mouseX - cWidth / 2,
    top: mouseY - cWidth / 2,
  });
});

// ローディング画面
//ページ読み込み完了でローディング画面を非表示
window.addEventListener("load", stopload);
//10秒経過で強制的にローディング画面を非表示
setTimeout("stopload()", 10000);
//ローディング画面を非表示にする処理
function stopload() {
  //ローディング画面とページを取得
  let load_logo = document.querySelector("#load_logo"),
    load_sound = document.querySelector("#load_sound");
  //ローディング画面とページにクラスを追加
  load_logo.classList.add("hide");
  load_sound.classList.add("show");
}

//サウンド画面
// 複数要素のボタンを取得
const soundBtn = document.querySelectorAll(".js_load_soundBtn");
for (let i = 0; i < soundBtn.length; i++) {
  //　クリックされたらサウンド画面を非表示
  soundBtn[i].addEventListener("click", function () {
    //サウンド画面とページを取得
    let load_sound = document.querySelector("#load_sound"),
      load = document.querySelector("#load"),
      page = document.querySelector("#page");
    //サウンド画面とページにクラスを追加
    load_sound.classList.add("hide");
    // setTimeout(() => {

    // }, timeout);
    load.classList.add("hide");
    page.classList.add("show");
  });
}

// BGM
$(function () {
  var audioBtn = $(".audio_button"),
    audioWrap = $(".audio_wrap"),
    audio = document.getElementById("audio");
  audioBtn.on("click", function () {
    if (audioWrap.hasClass("play")) {
      audio.pause();
      audioWrap.removeClass("play");
    } else {
      audio.play();
      audioWrap.addClass("play");
    }
  });
});

// ホタル
particlesJS("particles-js", {
  particles: {
    number: {
      value: 50, //この数値を変更するとホタルの数が増減できる
      density: {
        enable: true,
        value_area: 1602.3971861905397,
      },
    },
    color: {
      value: "#f3fa8b", //色
    },
    shape: {
      type: "circle", //形状はcircleを指定
      stroke: {
        width: 0,
      },
    },
    opacity: {
      value: 1,
      random: true, //透過をランダムに
      anim: {
        enable: false,
        speed: 1.10115236356258881,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 4.005992965476349,
      random: true, //サイズをランダムに
      anim: {
        enable: true,
        speed: 24.345709068776642,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1, //この数値を小さくするとゆっくりな動きになる
      direction: "none", //方向指定なし
      random: true, //動きはランダムに
      straight: false, //動きをとどめない
      out_mode: "out", //画面の外に出るように描写
      bounce: false, //跳ね返りなし
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
});
