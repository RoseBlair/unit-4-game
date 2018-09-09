



  
$(document).ready(function() {

var numberToHit = 0;
var counter = 0;
var losses = 0;
var wins = 0;

$("#counter").text(counter);

function initializeCounter() {
    
    counter = 0;
    $("#counter").text(counter);
    numberToHit = Math.floor(Math.random() * 100) +19;
    $("#numberToHit").text(numberToHit);
};

function winLossCheck(counter) {
    if (counter === numberToHit) {  
        wins++;
        initializeCounter();
    };   
    
    if (counter > numberToHit) {
        losses++;
        initializeCounter();
    };
    
};

numberToHit = Math.floor(Math.random() * 20) +19;
$("#numberToHit").text(numberToHit);

var crystal1 = Math.floor(Math.random() * 11) +1;
console.log(crystal1);


var crystal2 = Math.floor(Math.random() * 11) +1;
console.log(crystal2);


var crystal3 = Math.floor(Math.random() * 11) +1;
console.log(crystal3);


var crystal4 = Math.floor(Math.random() * 11) +1;
console.log(crystal4);



$("#crystal1").on("click", function() {
    counter = counter + crystal1;
    console.log(counter);
    $("#counter").text(counter);
   winLossCheck(counter);
   

});

$("#crystal2").on("click", function() {
    counter = counter + crystal2;
    console.log(counter);
    $("#counter").text(counter);
    winLossCheck(counter);
    
});

$("#crystal3").on("click", function() {
    counter = counter + crystal3;
    console.log(counter);
    $("#counter").text(counter);
    winLossCheck(counter);
});

$("#crystal4").on("click", function() {
    counter = counter + crystal4;
    console.log(counter);
    $("#counter").text(counter);
    winLossCheck(counter);
});





  });

