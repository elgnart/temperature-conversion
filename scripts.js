var temperature = prompt("Type the temperature number you would like to convert");
var scale = prompt("Are you converting from Celsius or Farenheit? (Type C or F)");

if (scale.toUpperCase() === "C"){
	var newtemp = (temperature * 1.8) + 32;
	document.write (newtemp);
	} 


if (scale.toUpperCase() === "F"){
	var newtemp = (temperature - 32) * (5/9);
	document.write (newtemp);
	} 
