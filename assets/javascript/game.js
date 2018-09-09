$(document).ready(function () {



    //defined variables

    var numberToHit = 0;
    var counter = 0;
    var losses = 0;
    var wins = 0;



    //insert counter into HTML

    $("#counter").text(counter);



    //initialize counter. reset counter to 0 and show in HTML. 
    //change the winning number and show in HTML.

    function initializeCounter() {
        counter = 0;
        $("#counter").text(counter);
        numberToHit = Math.floor(Math.random() * 100) + 19;
        $("#numberToHit").text(numberToHit);
    };



    //function that checks to see if user has won game. 
    //if user has won, show the win.

    function winLossCheck(counter) {
        if (counter === numberToHit) {
            wins++;
            $("#wins").text(wins);
            console.log(wins);
            initializeCounter();
            
        };



        //if user has lost game, show the loss. 

        if (counter > numberToHit) {
            losses++;
            $("#losses").text(losses);
            console.log(losses)
            initializeCounter();
        };

    };

    
    
    // create a number to hit that's between 19 and 120. 

    numberToHit = Math.floor(Math.random() * 100) + 19;
    $("#numberToHit").text(numberToHit);

    

    // make the crystal variables equal to a random value between 1 and 12.

    var crystal1 = Math.floor(Math.random() * 11) + 1;
    console.log(crystal1);


    var crystal2 = Math.floor(Math.random() * 11) + 1;
    console.log(crystal2);


    var crystal3 = Math.floor(Math.random() * 11) + 1;
    console.log(crystal3);


    var crystal4 = Math.floor(Math.random() * 11) + 1;
    console.log(crystal4);



    // a function that arises when one of the crystal images is clicked.
    // the numeric value of the crystal is added to the counter.
    // the winLossCheck function is then run to check for wins or losses.

    $("#crystal1").on("click", function () {
        counter = counter + crystal1;
        console.log(counter);
        $("#counter").text(counter);
        winLossCheck(counter);


    });

    $("#crystal2").on("click", function () {
        counter = counter + crystal2;
        console.log(counter);
        $("#counter").text(counter);
        winLossCheck(counter);

    });

    $("#crystal3").on("click", function () {
        counter = counter + crystal3;
        console.log(counter);
        $("#counter").text(counter);
        winLossCheck(counter);
    });

    $("#crystal4").on("click", function () {
        counter = counter + crystal4;
        console.log(counter);
        $("#counter").text(counter);
        winLossCheck(counter);
    });





});