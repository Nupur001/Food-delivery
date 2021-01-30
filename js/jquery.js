

$(document).ready(function(){

  $(".navbar-toggler").click(function(){
  $(".navbar").toggleClass("change-bg");
  $(".collapse").toggleClass("change-bg");

 
});


});

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$("#S").submit(function(){
  alert("Thank-you! Your feedback is recorded");
});

$(".car").click(function(){
  alert("Yuppie! Your dish is added :)");
});

function validateForm() {
  var x = document.forms["myForm"]["user"].value;
  console.log("Its working");
   var y = document.forms["myForm"]["pass"].value;
  if (x !== "Nupur") {
    alert("User does not exist");
    return false;
  }
  if (y !== "Nupur123") {
    alert("Wrong Password");
    return false;
  }
}

$(".overlay").click(function(){
  alert("Yuppie! Your dish is added :)");
});

function validate() {
  var num = document.forms["contact-form"]["telnum"].value;
  console.log("Its working");
  if(Number.isInteger(num))
  	{return true;}
  else{
  	alert("Invalid Telephone number");
  	return false;
  }
  };
  	

