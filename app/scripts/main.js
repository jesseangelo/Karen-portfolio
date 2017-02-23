'use strict';
// Plugin @RokoCB :: Return the visible amount of px
// of any element currently in viewport.
// stackoverflow.com/questions/24768795/
(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i, el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t = r.top, b = r.bottom;
         return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
       } visPx();
       $(win).on('resize scroll', visPx);
     });
  };
}(jQuery, window));

function activateIframe() {
  if( $('#content-main-frame').hasClass('active')) {
    $('#content-main-frame').removeClass('active');
  } else {
    $('#content-main-frame').addClass('active');
  }
}

$('.wireframes').inViewport(function(px){
    if(px) {
      $(this).addClass('triggered');
    }
});

$('#link-home').click(function (){
  document.getElementById('content-main-frame').src = 'home_grid.html';
  activateIframe();
});
