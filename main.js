const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const board = document.querySelector(".grid");
let cardChosen = [];
let cardChosenId = [];
const cardWon = [];
const resultDisplay = document.querySelector(".result");

//create Board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    board.appendChild(card);
    card.addEventListener("click", flipCard);
  }
}
createBoard();

//flipCard
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkForMatch, 400);
  }
}

function checkForMatch() {
  let cards = document.querySelectorAll("img");
  let optionOneId = cardChosenId[0];
  let optionTwoId = cardChosenId[1];
  if (cardChosen[0] === cardChosen[1] && cardChosenId[0] !== cardChosenId[1]) {
    alert("You Found a Match !!");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cardWon.push(cardChosen);
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry Try Again");
  }
  cardChosen = [];
  cardChosenId = [];
  resultDisplay.textContent = "Score : " + cardWon.length;
  if (cardWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations!! You Found All The Matches!";
  }
}
// function checkForMatch(){
//     let cards = document.querySelectorAll('img');
//     const optionOneId = cardChosenId[0];
//     const optionTwoId = cardChosenId[1];
//     if(cardChosen[0] === cardChosen[1] && cardChosenId[0] !== cardChosenId[1]){
//           alert('You Found a Match !!');
//           cards[optionOneId].setAttribute('src', 'images/white.png');
//           cards[optionTwoId].setAttribute('src', 'images/white.png');
//           cardWon.push(cardChosen);
//           cards[optionOneId].removeEventListener("click", flipCard);
//           cards[optionTwoId].removeEventListener("click", flipCard);
//       } else {
//           cards[optionOneId].setAttribute('src', 'images/blank.png');
//           cards[optionTwoId].setAttribute('src', 'images/blank.png');
//           alert('Sorry Try Again');

//       }
//       cardChosen = [];
//       cardChosenId = [];
//       resultDisplay.textContent = 'Your Score : ' + cardWon.length;
//       if(cardWon.length === cardArray.length/2){
//           resultDisplay.textContent = 'Congratulations! You Found All The Matches !!';
//       }

//   }
