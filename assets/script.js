var msg1 = "To be confident as a Developer";
var msg2 = "To really understand the concepts";
var msg3 = "To have fun learning";


function updateMessage() {

	var el1 = document.getElementById('message1').innerHTML = msg1;
	var el2 = document.getElementById('message2').innerHTML = msg2;
	var el3 = document.getElementById('message3').innerHTML = msg3;
}

updateMessage();


//Get Random number function
function getRandomNum() {
 	var x = 0;
	var r = document.getElementById('info');
	var randomNum = Math.floor((Math.random() * 10) + 1);

	r.innerHTML = '<h1>Random Number</h1><h2>' + randomNum + '</h2>';
}

// Call the function
getRandomNum();


//get Saying length 
var saying = "Home Sweet Home";

var message = "<h2>Saying length</h2><p>" + saying.length + "</p>";

var element = document.getElementById("messageInABottle").innerHTML = message;

