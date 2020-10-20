/*$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});
*/
$(document).ready(function () {
  $(".clickable").click(function () {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
});
$(document).ready(function () {
  $(".clickable-text").click(function () {
    $("#text-showing").slideToggle();
    $("#text-hidden").slideToggle();
  });
});
