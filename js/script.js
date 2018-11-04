
var i = 0;
var delay = 2500;
var arrayOne = [];


arrayOne[0] = "../img/oldFacefull.jpg";
arrayOne[1] = "../img/pierportBeachSouth.jpg";
arrayOne[2] = "../img/oldFacefull.jpg";
arrayOne[3] = "../prettyKitty.jpg";


function transition() {
    document.slideShow.src = images[i];

if ( i < arrayOne.length - 1){
    i++;
} else {
    i=0;
}


}

setTimeout("transition()", delay);

window.onload=transition; 