/*ボタン押したら背景変わる*/
$('.humberger').click(function () {
  $(".humberger,.nav_menu_SP").toggleClass("active");
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
  $(".humberger,.nav_menu_SP").removeClass("active");
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});