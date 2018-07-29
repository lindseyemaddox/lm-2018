(function($) {

  $(document).ready(function(){
    $('.toggle-nav').on('click', function() {
      toggleNavigation($(this), $('.nav-pane'));
      changeLetters($(this));
    });

    function toggleNavigation(btn, nav) {
      btn.toggleClass('open');
      nav.toggleClass('open');
    }

    function changeLetters(btn) {
      var m = $('.toggle-nav span.m');
      var e = $('.toggle-nav span.e');

      e.toggleClass('btn-close');

      if(btn.hasClass('open'))
      {
        m.text("E");
      }
      else
      {
        m.text("M");
      }
    }
  });

})(jQuery);
