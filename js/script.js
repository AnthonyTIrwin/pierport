

var i = 0; 			// Index
var imgArray = [];	// Array of Images
var time = 3500;	// Slide Delay
	 
// Image List
imgArray[0] = "./img/oldFacefull.jpg";
imgArray[1] = "./img/pierportBeachSouth.jpg";
imgArray[2] = "./img/oldFacefull.jpg";
imgArray[3] = "./img/oldFacefull.jpg";
imgArray[4] = "./img/oldFacefull.jpg";


//Image Transition
function transition(){
	document.slide.src = imgArray[i];

	// Check If Index is Less Than i
	if(i < imgArray.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Index Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("transition()", time);
}

// Run function when page loads
window.onload=transition;