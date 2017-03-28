$(document).ready(function(){
  $("polygon").click(function(){
      var id = $(this).attr("name");
      $("#line"+id).removeClass("hide");
      console.log($("#line"+id));
  });
});
