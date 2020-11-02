

$(document).ready(function(){

  $(".navbar-toggler").click(function(){
  $(".navbar").toggleClass("change-bg");
  $(".collapse").toggleClass("change-bg");

 
});


});

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});