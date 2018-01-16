$("#nav").hide();
$("a[href^='#']").on("click", function(e) {
  e.preventDefault();
  // Offset: use this only if you have (for example) a fixed header
  return $("html, body").animate({
    scrollTop: $(this.hash).offset().top
  }, 300);
});

$('#toggle-navbar').click(function(){
  $("#nav").animate({width:'toggle'},350);
  $('#toggle-navbar').hide();
});
$('#cross-nav').click(function(){
  $("#nav").animate({width:'toggle'},350,function(){
    $('#toggle-navbar').show();
  });
});
