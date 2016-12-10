$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slidepls");
      $(this).addClass("slidepls1");
      $(this).addClass("slidepls2");
    }
  });
});