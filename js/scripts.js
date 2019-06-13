$(document).ready(function(){
    $(".tgl p").hide();
  $("#delivery").click(function(){
      $("#delivery img").toggle();
     $("#delivery p").toggle();
  });
  $("#choose").click(function(){
    $("#choose img").toggle();
   $("#choose p").toggle();
});
$("#receive").click(function(){
    $("#receive img").toggle();
   $("#receive p").toggle();
});
});