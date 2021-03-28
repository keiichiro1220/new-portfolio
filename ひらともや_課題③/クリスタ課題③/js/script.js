// ページ内リンクまでスクロール
$(function () {
  var headerHeight = 100;
  $('[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHeight;
    $('html, body').animate({ scrollTop: position }, 500);
    return false;
  });
});