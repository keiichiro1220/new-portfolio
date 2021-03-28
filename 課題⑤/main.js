$(function () {
  // グローバルメニューの位置
  var navPos = $('#global-nav').offset().top;
  // グローバルメニューの高さ
  var navHeight = $('#global-nav').outerHeight();

  // 実行する時のタイミングファンクション
  // スクロール時のファンクション
  $(window).on('scroll', function () {
    var winW = $(window).width();
    var dewW = 1130;
    var dewW2 = 770;

    // 画面幅の分岐
    // 画面幅1130px以上の際のファンクション
    if ( winW >= dewW && 700 < $(this).scrollTop()) {
      $('#global-nav').addClass('m_fixed');
    } else {
      // 画面幅1130px以下の際のファンクション
      if (dewW2 < winW <= dewW && 1250 < $(this).scrollTop()) {
        $('#global-nav').addClass('m_fixed');
        $('#bottom-global-nav').addClass('m_fixed');
      } else{
        $('#global-nav').removeClass('m_fixed');
        $('#bottom-global-nav').removeClass('m_fixed');
      }
    }
      // $('#global-nav').removeClass('m_fixed');
  });

  // 画面幅1130px未満の際のファンクション
  // $(window).on('scroll', function () {
  //   var winW = $(window).width();
  //   var dewW = 1130;
    // if (winW <= dewW && 1250 < $(this).scrollTop()) {
    //   $('#global-nav').addClass('m_fixed');
    // } else {
    //   $('#global-nav').removeClass('m_fixed');
    // }
  // });
});
