
let randomNumber1 = Math.floor(Math.random() * 6) + 1; //declared var for random number
let randomImage = "dice" + randomNumber1 + ".png";
let randomImageWithSource = "images/" + randomImage; // created random image out of given files
let image1 = document.querySelector("img.img1"); // declared var for first image
image1.setAttribute("src", randomImageWithSource); // changed source of image-1

let randomNumber2 = Math.floor(Math.random() * 6) + 1; // declared var for second random number
let randomImage2 = "images/dice" + randomNumber2 + ".png"; // created random image for second dice
let image2 = document.querySelector("img.img2"); // decrared var for second image
image2.setAttribute("src", randomImage2); // changed source of image-2

	// if player 1 wins
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "Player 1 Wins !";
	// if player 2 wins
} else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player 2 Wins !";
	// if it's a draw
} else {
	document.querySelector("h1").innerHTML = "It's a Draw !";
}
