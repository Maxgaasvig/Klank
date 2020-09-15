/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

// Tjek at DOM er indlæst

    // ... your code here ...
    
    // ... end ...



let myVideo = document.getElementById("myVideo");
// preload
myVideo.width = 333;
myVideo.controls = true; //booleans J/N sandt/falsk

// the ON / OFF trick
function playPause() {
  if (myVideo.paused) {
    myVideo.play();
    myVideo.controls = false;
      
    
      }

     
                          
  else {
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
  function(){
    myVideo.muted = true;
  });

