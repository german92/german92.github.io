// $("#home_pic").click(function(){
// 	alert("HOLA MUNDO");
// });


// $("home_pic").click(function(){
//      $("home_pic").animate({left: '250px'});
// });

$(document).ready(function(){
  $("home_pic").click(function(){
    $("home_pic").animate({
      left: '250px',
      height: '+=150px',
      width: '+=150px'
    });
  });
});


// $("#home_pic").animate({width:'toggle'},350);
// $('#home_pic').hide("slide", {direction: "right" }, 1000);
// $('#home_pic').show("slide", { direction: "left" }, 1000);
