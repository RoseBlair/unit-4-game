



  
$(document).ready(function() {

var numberToHit = 0;
var counter = 0;

$("#counter").text(counter);

function initializeCounter() {
    counter = 0;
};

numberToHit = Math.floor(Math.random() * 100) +19;
$("#numberToHit").text(numberToHit);

var crystal1 = Math.floor(Math.random() * 11) +1;


var crystal2 = Math.floor(Math.random() * 11) +1;


var crystal3 = Math.floor(Math.random() * 11) +1;


var crystal4 = Math.floor(Math.random() * 11) +1;



$("#crystal1").on("click", function() {
    counter = counter + crystal1;
    console.log(counter);
});

$("#crystal2").on("click", function() {
    counter = counter + crystal2;
    console.log(counter);
});

$("#crystal3").on("click", function() {
    counter = counter + crystal3;
    console.log(counter);
});

$("#crystal4").on("click", function() {
    counter = counter + crystal4;
    console.log(counter);
});



if (counter=== numberToHit || counter > numberToHit) {
    initializeCounter();
};


  });

