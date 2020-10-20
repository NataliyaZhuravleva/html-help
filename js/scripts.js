/*$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});
*/$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
});