$(function() {
  $('figcaption').hide();
  
  var timeOut;
  var next;

  $('img').hover(
    function(e) {
      next = $(e.target).next();
      timeOut = setTimeout(function() {
        $(next).fadeIn();
      }, 2000);
    },

    function(e) {
      clearTimeout(timeOut);
      $(next).fadeOut();
    }
  );
});
