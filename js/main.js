
/*ボタン押したら背景変わる*/
$('.humberger').click(function () {
  $(".humberger,.nav_menu_SP,.sp-menu_item").toggleClass("active");
  if ($(this).hasClass('active')) {
    $(".humberger").css("background-color", "rgba(30, 44, 77, 0)");
  } else {
    $(".humberger").css("background-color", "#1e1c1c");
  }
});


/*スムーススクロール*/
$('a[href^="#"]').click(function () {
  var speed = 500;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top;
  $(".humberger,.nav_menu_SP,.sp-menu_item").removeClass("active");
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});

/*scroll*/
/*gsap.from(".topMessage-catch", {
  scrollTrigger: ".topMessage-catch", // ".box"がビューポートに入ったらアニメーション開始 (一度だけ)
  y: 100,
  duration: 1,
},1);
*/

//光るキャッチコピー

// glowAnimeにglowというクラス名を付ける定義
function GlowAnimeControl() {
	$('.glowAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("glow");

		} else {
			$(this).removeClass("glow");
		}
	});
}


// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
    var element = $(".glowAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
        var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述




//ぽよん
gsap.from("#catch-niman",{
  scrollTrigger: {
    trigger: "#catch-niman",
    toggleActions: "play pause resume reset",
  },
  y: 100,
  scale: 0,
  duration: .5,
});

gsap.from("#catch-suijo", {
  scrollTrigger: {
    trigger: "#catch-suijo",
    toggleActions: "play pause resume reset",
  },
  y: 100,
  scale: 0,
  duration: 0.5,
});

gsap.from("#h2_title_news", {
  scrollTrigger: {
    trigger: "#h2_title_news",
    toggleActions: "play pause resume reset",
  },
  y: 80,
  scale: 0,
  duration: 0.3,
});

gsap.from("#h2_title_midokoro", {
  scrollTrigger: {
    trigger: "#h2_title_midokoro",
    toggleActions: "play pause resume reset",
  },
  y: 80,
  scale: 0,
  duration: 0.3,
});

gsap.from("#h2_title_gaiyou", {
  scrollTrigger: {
    trigger: "#h2_title_gaiyou",
    toggleActions: "play pause resume reset",
  },
  y: 80,
  scale: 0,
  duration: 0.3,
});

gsap.from("#h2_title_access", {
  scrollTrigger: {
    trigger: "#h2_title_access",
    toggleActions: "play pause resume reset",
  },
  y: 80,
  scale: 0,
  duration: 0.3,
});

gsap.from("#h2_title_attention", {
  scrollTrigger: {
    trigger: "#h2_title_attention",
    toggleActions: "play pause resume reset",
  },
  y: 80,
  scale: 0,
  duration: 0.3,
});
