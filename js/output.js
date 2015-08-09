
// Adds smooth scrolling. Code taken from https://css-tricks.com/snippets/jquery/smooth-scrolling/

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// Change quotes


// var quote_list = document.querySelectorAll(".quote");
// var i = 0;

// while (1) {
//   setTimeout(function() {
//     $(quote_list[i]).fadeOut(800, function() {
//       $(quote_list[i+1]).fadeIn(800);  
//     });
//   }, 2200); 
  
//   if (i >= 3) {
//     i = 0;
//   }
//   else {
//     i++;
//   }
// }




setTimeout(function() {
  $('#first_quote').fadeOut(800, function() {
    $('#second_quote').fadeIn(800, function () {
      $('#second_quote').delay(2000).fadeOut(800, function() {
        $('#third_quote').fadeIn(800);
      });
    });  
  });
}, 2200); // <-- time in milliseconds

