//declaring variables
var firstCard;
var pick;
var secondCard;
var timer;
var numAttempts = 0;
var matches = 0;

//array with card images
var cards = [];

//populates array with card images
cards[0] = '../images/dancers.jpg';
cards[1] = '../images/doodle.png';
cards[2] = '../images/flowers.png';
cards[3] = '../images/moon.jpg';
cards[4] = '../images/ring.png';
cards[5] = '../images/sketch.jpg';
cards[6] = '../images/space.jpg';
cards[7] = '../images/watercolor.jpg';
cards[8] = '../images/dancers.jpg';
cards[9] = '../images/doodle.png';
cards[10] = '../images/flowers.png';
cards[11] = '../images/moon.jpg';
cards[12] = '../images/ring.png';
cards[13] = '../images/sketch.jpg';
cards[14] = '../images/space.jpg';
cards[15] = '../images/watercolor.jpg';

//amount of matched pairs
var matchedPairs = 0.5 * cards.length;

/*
choose() function lets the user to flip 2 cards face up and not more than 
2 per turn.
Function runs every time the user clicks on a card. 
If user has flipped already 2 cards, exit function.
card - index of the selected card passed from HTML.
If picks is 0 then store the card index in var firstCard, display img
that corresponds to first card clicked and set pick to 1.
Else second pick, store card index in var secondCard, 
display img that corresponds to second card clicked and 
run timer to call match() in 1 second.
*/
function choose(card) {
    if (pick == 2) {
        return;
    }
    if (pick == 0) {
        firstCard = card;
        document.images[card].src = cards[card];
        pick = 1;
    }
    else {
        pick = 2;
        secondCard = card;
        document.images[card].src = cards[card];
        timer = setInterval("match()", 1000);
    }
}

/*
match() function checks  whether both picked cards are the same.
match() function runs after the user has picked 2 cards.
Stops timer. Increments numAttemts by 1. Displays numAttempts.

If firstCard equal to secondCard, then add 1 to var matches, 
set pick to 0.
    Nested if statement: if all 8 matches are found
    then show alert message that the game is over and show
    numAttempt, reload the page to start new game.
Else: if cards are not a matched pair, turn both 
picked cards bacwards and set pick to 0 so the choose() function could be executed.
*/
function match() {
    var backCard = "../images/panda.png"; //shows the back of the card
    clearInterval(timer);
    numAttempts++;
    document.getElementById("attempts").innerHTML = numAttempts;
    if (cards[secondCard == firstCard]) {
        matches++;
        pick = 0;
        if (matches == matchedPairs) {
            alert("You won!\n Number of attempts " + numAttempts + ". Press OK to play again.")
        }
    else {
        document.images[firstCard].src = backCard;
        document.images[secondCard].src = backCard;
        pick = 0;
    }
    }
}






