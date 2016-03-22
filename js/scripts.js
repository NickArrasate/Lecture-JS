$(document).ready(function() {

$(".par1").click(function() {
  $(".par1").toggleClass("background1");
});

$(".par2").click(function() {
  $(".par2").toggleClass("background2");
});

$(".par3").click(function() {
  $(".par3").toggleClass("background3");
});
$(".btn-primary").click(function(){
  $("body").removeClass();
  $("body").addClass("backgroundblue");
});

$(".btn-danger").click(function(){
  $("body").removeClass();
  $("body").addClass("backgroundred");
});

$(".btn-success").click(function(){
  $("body").removeClass();
  $("body").addClass("backgroundgreen");
});

$(".btn-default").click(function(){
  $("body").removeClass();
});

});
