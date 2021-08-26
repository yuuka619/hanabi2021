/*ボタン押したら背景変わる*/
$('.humberger').click(function () {
  $(".humberger,.nav_menu_SP").toggleClass("active");
  if ($(this).hasClass('active')) {
    $(".humberger").css("background-color", "rgba(30, 44, 77, 0)");
  } else {
    $(".humberger").css("background-color", "#1e1c1c");
  }
});

/*リンクボタン押したら引っ込む*/
$(".sp-menu_item").click(function () {
  $(".nav_menu_SP").removeClass("active");
});