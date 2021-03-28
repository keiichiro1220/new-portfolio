// topへ戻る
$(document).ready(function () {
  $(".pagetop").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".pagetop").fadeIn();
      } else {
        $(".pagetop").fadeOut();
      }
    });

    $(".pagetop a").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  });
});
// お問い合わせﾍﾟｰｼﾞまでスクロールする
$(function () {
  var position = $('#contact').offset().top;
  $('.contact-link').click(function () {
    $('html, body').animate({ scrollTop: position }, 500);
    return false;
  });
});
// ページ内リンクまでスクロール
$(function () {
  var headerHeight = 50;
  $('[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHeight;
    $('html, body').animate({ scrollTop: position }, 500);
    return false;
  });
}); 
$(".navbar-nav>li>a , .dropdown-menu>a").on("click", function () {
  if (this.id != "navbarDropdown") {
    $(".navbar-collapse").collapse("hide");
  }
});
$("main, #header").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

// フォーム誤発信防止機能
$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form textarea').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });
});
// フォーム送信後画面制御機能
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdGvHiuLXzET0pO6kc3Np4RJGyKWbiRKZ5ows1PtyR5tEAM4g/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".contact-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});
// アコーディオン機能
$(function () {
  $('.js-Accordion-open').on('click', function () {
    $(this).next().slideToggle();
  });
});
// AOS
AOS.init();
