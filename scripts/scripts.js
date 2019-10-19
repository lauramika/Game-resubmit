//declaring variables
var firstCard;
var pick;
var secondCard;
var timer;
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

/*choose() function lets the user to flip 2 cards face up. Function runs every 
time the user clicks on a card. If user flipped already 2 cards, exit function.
card - index of the selected card passed from HTML.
If picks is 0 then store the card index in var firstCard, display img
that corrsponds to first card clicked and set pick to 1.
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
        timer = setInterval("match()", 1000)
    }
}

//match() function checks  is both picked cards are a pair or not

