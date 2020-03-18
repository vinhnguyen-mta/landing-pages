var logo = document.querySelector('.logo-header'),
    blurredBird = document.querySelector('.back-bird'),
    foreBird = document.querySelector('.fore-bird');
    

window.addEventListener('scroll', function() {
  
    var scrolled = window.scrollY;
  
    logo.style.transform = "translate(0px," + scrolled/2 +"%)";
    blurredBird.style.transform = "translate(0px," + scrolled/5 +"%)";
    foreBird.style.transform = "translate(0px,-" + scrolled/80 +"%)";
 
});


var forEach = function (array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback.call(null, i, array[i]);
  }
};