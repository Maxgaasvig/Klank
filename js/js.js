/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

// Tjek at DOM er indlæst


// Disables the controls from the boomerang videos that autoplays and runs in loops.
var boomrang1 = document.getElementById("boomerang1");
boomrang1.controls =false;

var boomrang2 = document.getElementById("boomerang2");
boomrang2.controls =false;



/* Scroll button functions */


// Gets the button 
var scrollbutton = document.getElementById("scrollbutton");


// When you scroll past 2100px from the top of the document, the button will show itself, if below 2100px, the button is hidden
function scrollFunction() {
    if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
        scrollbutton.style.display = "block";
    } else {
        scrollbutton.style.display = "none";
    }
}

window.onscroll = function () {
    scrollFunction();
}

// When the user clicks on the button, scroll to 1150px from the top of the document At the map.
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 1150;
}




