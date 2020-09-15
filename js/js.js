/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

// Tjek at DOM er indlæst



/*


let myVideo = document.getElementById("myVideo");
// preload
myVideo.width = 333;
myVideo.controls = true; //booleans J/N sandt/falsk

// the ON / OFF trick
function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        myVideo.controls = false;


    } else {
        myVideo.pause();
        myVideo.controls = true;
    }



}

function mouseOver() {
    document.getElementById("demo").style.color = "red";
}

function mouseOut() {
    document.getElementById("demo").style.color = "black";
}


function makeBig() {
    myVideo.width = 1000;

}

// muting sound
function shutUpPlease() {
    // ... logic here: write some code that will mute the video ...
    // document.getElementById("myVideo").muted = true;
    myVideo.muted = true;
}

// "unmuting" sound
function orangeAmp() {
    // ... logic here: write some code that will mute the video ...
    // document.getElementById("myVideo").muted = true;
    myVideo.muted = false;
}

function makeSmall() {
    myVideo.width = 200;
}

function makeNormal() {
    myVideo.width = 420;
}

// eventlisteners will give you fewer codelines
shutup.addEventListener('click',
    function () {
        myVideo.muted = true;
    });

*/



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

window.onscroll = function() {
    scrollFunction();
}

// When the user clicks on the button, scroll to 1150px from the top of the document At the map.
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 1150;
}
