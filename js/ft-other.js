$(document).ready(function(){
  $(".btn-click").click(function(){
    $(this).toggleClass("btn-click__icon");
    $(this).next().toggleClass("showDropdown");
  });
});