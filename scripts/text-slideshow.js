$( document ).ready(function() {
    $( ".prevSlide" ).click(function() {
  plusDivs(-1)
});

$( ".nextSlide" ).click(function() {
  plusDivs(1)
});

$( ".play-pause" ).click(function() {
  changeState(this);
});

var slideIndex = 1;
var t = setInterval(function () {
  plusDivs(1);
}, 5000);

showDivs(slideIndex);

function changeState(el) {
  if (!t) {
    t = setInterval(function () {
      plusDivs(1);
    }, 5000);
$(".play-pause span").removeClass("fa-play").addClass("fa-pause");
 
  } else {
    clearInterval(t);
    t = false;
$(".play-pause span").removeClass("fa-pause").addClass("fa-play");
  }
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("textSlides");

  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";

}
});



