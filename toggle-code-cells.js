$(document).ready(() => {
  $('<button class="toggle-code">Toggle Code</button>').appendTo(
    ".cell.code_cell"
  );

  $(".toggle-code").click(function() {
    $(this.parentNode).toggleClass("show-code");
  });
});
