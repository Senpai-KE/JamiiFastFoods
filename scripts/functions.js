function animationHover(element, animation){
  element = $(element);
  element.hover(
      function() {
          element.addClass('animated ' + animation);
      },
      function(){
          //wait for animation to finish before removing classes
          window.setTimeout( function(){
              element.removeClass('animated ' + animation);
          }, 2000);
      });
  }
function animationClick(element, animation){
  element = $(element);
  element.click(
      function() {
          element.addClass('animated ' + animation);
          //wait for animation to finish before removing classes
          window.setTimeout( function(){
              element.removeClass('animated ' + animation);
          }, 2000);

      });
    }
  //show password function
  function pword(){
    var x = document.getElementById('input');
    if(x.type === "password"){
      x.type = "text";
    }else{
      x.type = "password";
    }
  }
  //jquery HOVER instances
$(document).ready(function(){
  $(".hoverli").hover(
    function(){
      $('ul.dropdown-menu').stop(true,true).slideDown('medium');
    },
    function(){
      $('ul.dropdown-menu').stop(true, true).slideUp('medium');
    }
  );

  $("#twitter").each(function(){
    animationHover(this, 'bounce');
  });
  $("#facebook").each(function(){
    animationHover(this, 'bounce');
  });
});
