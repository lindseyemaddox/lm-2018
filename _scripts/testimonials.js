var $showTestimonials,
  $testimonials;

function initVars() {
  $showTestimonials  = $('div.copyline');
  $testimonials  = $('footer .testimonials');
}

function showTestimonials(){
  $showTestimonials.click(function(){
    $testimonials.toggleClass('visible');
    return false;
  });
}

function firstLoad() {
  initVars();
  showTestimonials();
}

$(function() {
  firstLoad();
});