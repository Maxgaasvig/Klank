/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

// Tjek at DOM er indlæst


// Disables the controls from the boomerang videos that autoplays and runs in loops.
var boomrang1 = document.getElementById("boomerang1");
boomrang1.controls = false;

var boomrang2 = document.getElementById("boomerang2");
boomrang2.controls = false;

/*   -------------------------  Map Buttons  --------------------------------------     */

var mapBtn1 = document.getElementById("mapButton1");
var mapBtn2 = document.getElementById("mapButton2");
var mapBtn3 = document.getElementById("mapButton3");

mapBtn1.addEventListener("click", mapbtn1Action);
mapBtn2.addEventListener("click", mapbtn2Action);
mapBtn3.addEventListener("click", mapbtn3Action);


function mapbtn1Action() {
    location.href = "#eleverne";
}


function mapbtn2Action() {
    location.href = "#forventningerContent";
}


function mapbtn3Action() {
    location.href = "#optagelse";
}


/* Scroll button functions */


// Gets the button 
var scrollbutton = document.getElementById("scrollbutton");


// When you scroll past 2100px from the top of the document, the button will show itself, if below 2100px, the button is hidden
function scrollFunction() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
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
    document.documentElement.scrollTop = 870;
}



var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "images/slides1.jpg";
images[1] = "images/slides2.jpg";
images[2] = "images/slides3.jpg";
images[3] = "images/slides4.jpg";



// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;


