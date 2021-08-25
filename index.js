//For Player 1
var randomNumber1 = Math.random() * 6; //random number generation between 0 and 5
randomNumber1 = Math.floor(randomNumber1) + 1; //Incrementing by 1 to set range between 1 to 6
var diceImage = "dice" + randomNumber1 + ".png"; //Concatenation of the dice image name and random number to change the image to random
var imageSource = "images/" + diceImage; // Concatenation of directory path "images/" with the random dice image
document.querySelectorAll("img")[0].setAttribute("src", imageSource); //Changing the random image source using class of image 1 by 

//For Player 2
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
diceImage = "dice" + randomNumber2 + ".png";
imageSource = "images/" + diceImage;
document.querySelectorAll("img")[1].setAttribute("src", imageSource);

//Random Results
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Won"; //Updating h1 using innerHTML to show the win stat
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Won🚩";
} else { document.querySelector("h1").innerHTML = "🚩Oops! Its a draw🚩"; }