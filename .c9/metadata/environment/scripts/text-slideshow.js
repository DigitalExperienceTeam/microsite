{"filter":false,"title":"text-slideshow.js","tooltip":"/scripts/text-slideshow.js","undoManager":{"mark":15,"position":15,"stack":[[{"start":{"row":0,"column":0},"end":{"row":62,"column":9},"action":"insert","lines":["<script type=\"text/javascript\">","","$( \".prevSlide\" ).click(function() {","  plusDivs(-1)","});","","$( \".nextSlide\" ).click(function() {","  plusDivs(1)","});","","$( \".play-pause\" ).click(function() {","  changeState(this);","});","","var slideIndex = 1;","var t = setInterval(function () {","  plusDivs(1);","}, 5000);","","showDivs(slideIndex);","","function changeState(el) {","  if (!t) {","    t = setInterval(function () {","      plusDivs(1);","    }, 5000);","$(\".play-pause span\").removeClass(\"fa-play\").addClass(\"fa-pause\");"," ","  } else {","    clearInterval(t);","    t = false;","$(\".play-pause span\").removeClass(\"fa-pause\").addClass(\"fa-play\");","  }","}","","function plusDivs(n) {","  showDivs(slideIndex += n);","}","","function currentDiv(n) {","  showDivs(slideIndex = n);","}","","function showDivs(n) {","  var i;","  var x = document.getElementsByClassName(\"textSlides\");","","  if (n > x.length) {","    slideIndex = 1","  }","  if (n < 1) {","    slideIndex = x.length","  }","  for (i = 0; i < x.length; i++) {","    x[i].style.display = \"none\";","  }","","  x[slideIndex - 1].style.display = \"block\";","","}","","","</script>"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":31},"action":"remove","lines":["<script type=\"text/javascript\">"],"id":2}],[{"start":{"row":61,"column":0},"end":{"row":62,"column":9},"action":"remove","lines":["","</script>"],"id":3},{"start":{"row":60,"column":0},"end":{"row":61,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["a"],"id":4},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["l"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["e"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["r"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":[" "],"id":5}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":8},"action":"insert","lines":["()"],"id":6}],[{"start":{"row":0,"column":7},"end":{"row":0,"column":9},"action":"insert","lines":["\"\""],"id":7}],[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["h"],"id":8},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["e"]},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["l"]},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["l"]},{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["o"]}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":[";"],"id":9}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":16},"action":"remove","lines":["alert (\"hello\");"],"id":10},{"start":{"row":0,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["$( document ).ready(function() {","    console.log( \"ready!\" );","});"]}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":3},"action":"remove","lines":["$( document ).ready(function() {","    console.log( \"ready!\" );","});"],"id":11}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":12},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["$( document ).ready(function() {","    console.log( \"ready!\" );","});"],"id":14}],[{"start":{"row":5,"column":0},"end":{"row":62,"column":1},"action":"remove","lines":["$( \".prevSlide\" ).click(function() {","  plusDivs(-1)","});","","$( \".nextSlide\" ).click(function() {","  plusDivs(1)","});","","$( \".play-pause\" ).click(function() {","  changeState(this);","});","","var slideIndex = 1;","var t = setInterval(function () {","  plusDivs(1);","}, 5000);","","showDivs(slideIndex);","","function changeState(el) {","  if (!t) {","    t = setInterval(function () {","      plusDivs(1);","    }, 5000);","$(\".play-pause span\").removeClass(\"fa-play\").addClass(\"fa-pause\");"," ","  } else {","    clearInterval(t);","    t = false;","$(\".play-pause span\").removeClass(\"fa-pause\").addClass(\"fa-play\");","  }","}","","function plusDivs(n) {","  showDivs(slideIndex += n);","}","","function currentDiv(n) {","  showDivs(slideIndex = n);","}","","function showDivs(n) {","  var i;","  var x = document.getElementsByClassName(\"textSlides\");","","  if (n > x.length) {","    slideIndex = 1","  }","  if (n < 1) {","    slideIndex = x.length","  }","  for (i = 0; i < x.length; i++) {","    x[i].style.display = \"none\";","  }","","  x[slideIndex - 1].style.display = \"block\";","","}"],"id":15}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":28},"action":"remove","lines":["console.log( \"ready!\" );"],"id":16},{"start":{"row":1,"column":4},"end":{"row":58,"column":1},"action":"insert","lines":["$( \".prevSlide\" ).click(function() {","  plusDivs(-1)","});","","$( \".nextSlide\" ).click(function() {","  plusDivs(1)","});","","$( \".play-pause\" ).click(function() {","  changeState(this);","});","","var slideIndex = 1;","var t = setInterval(function () {","  plusDivs(1);","}, 5000);","","showDivs(slideIndex);","","function changeState(el) {","  if (!t) {","    t = setInterval(function () {","      plusDivs(1);","    }, 5000);","$(\".play-pause span\").removeClass(\"fa-play\").addClass(\"fa-pause\");"," ","  } else {","    clearInterval(t);","    t = false;","$(\".play-pause span\").removeClass(\"fa-pause\").addClass(\"fa-play\");","  }","}","","function plusDivs(n) {","  showDivs(slideIndex += n);","}","","function currentDiv(n) {","  showDivs(slideIndex = n);","}","","function showDivs(n) {","  var i;","  var x = document.getElementsByClassName(\"textSlides\");","","  if (n > x.length) {","    slideIndex = 1","  }","  if (n < 1) {","    slideIndex = x.length","  }","  for (i = 0; i < x.length; i++) {","    x[i].style.display = \"none\";","  }","","  x[slideIndex - 1].style.display = \"block\";","","}"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":58,"column":1},"end":{"row":58,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":129,"mode":"ace/mode/javascript"}},"timestamp":1627458270174,"hash":"a854563476b8c663aac07138963837cc13653a18"}