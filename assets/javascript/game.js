$(document).ready(function() {
	var counter = 0;
	var win = 0;
	var losse = 0;
	newGame();
    var targetNumber =Math.floor(Math.random()*100);
    $("#number").text(targetNumber);
    var redNumber =Math.floor(Math.random()*15)+1;
    var blueNumber =Math.floor(Math.random()*15)+1;
    var yellowNumber =Math.floor(Math.random()*15)+1;
    var greenNumber =Math.floor(Math.random()*15)+1;

    function newGame() {
    	counter = 0;
    	targetNumber =Math.floor(Math.random()*100);
    	$("#number").text(targetNumber);
        redNumber =Math.floor(Math.random()*15)+1;
        blueNumber =Math.floor(Math.random()*15)+1;
        yellowNumber =Math.floor(Math.random()*15)+1;
        greenNumber =Math.floor(Math.random()*15)+1;
        $("#score").text(counter);

    };

    function wl(){
	    if (counter == targetNumber) {
	    	win++;
	    	$("#win").text(win);
	    	alert("You win!");
	    	newGame();
	    }
	    else if (counter > targetNumber) {
	    	losse++;
	    	$("#losse").text(losse);
	    	alert("You losse, try again!");
	    	newGame();
	    };
    };

    $("#red").on("click", function() {

    	counter += redNumber;
    	$("#score").text(counter);
    	wl();
    });
    $("#blue").on("click",function(){
    	counter += blueNumber;
    	$("#score").text(counter);
    	wl();
    });
    $("#yellow").on("click",function(){
    	counter += yellowNumber;
    	$("#score").text(counter);
    	wl();
    });
    $("#green").on("click",function(){
    	counter += greenNumber;
    	$("#score").text(counter);
    	wl();
    });





});