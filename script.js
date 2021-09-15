let down = document.getElementById("down");
let main = document.getElementById("main");

down.onclick = () => {
  main.style.top = '55px';
}

let up = document.getElementById("up");

up.onclick = () => {
  main.style.top = '650px';
}


let darkButton = document.getElementById("dark");
let lightButton = document.getElementById("light");
let toggle = document.getElementById("toggle");
/*let header = document.getElementById("header");
let front = document.getElementById("front");
let home = document.getElementById("menu-item");
let menu = document.getElementsByClassName("menu-item");*/

darkButton.onclick = () => {
  main.style.color = 'white';
  main.style.backgroundColor = 'black';
  toggle.style.border = 'solid white 1px';
  up.style.color = 'lightblue';
  /*header.style.backgroundColor = 'black';
  menu.style.color = "white";
  front.style.backgroundColor = "black";*/
}

lightButton.onclick = () => {  
  main.style.color = 'black';
  main.style.backgroundColor = 'snow';
  toggle.style.border = 'solid black 1px';
  up.style.color = "indigo";
  /*header.style.backgroundColor = 'snow';
  menu.style.color = "black";
  front.style.backgroundColor = "snow";*/
}




let cardImage1 = document.getElementById('cover1');
let cardImage2 = document.getElementById('cover2');
let cardImage3 = document.getElementById('cover3');
const joker = 'https://i.pinimg.com/564x/fc/34/56/fc3456706fa015eb4ceb062c0a76db28.jpg';
const clubs = 'https://i.pinimg.com/564x/85/b3/18/85b318ab58b285e43cf88fa243d7edbb.jpg';
const hearts = 'https://i.pinimg.com/564x/cc/54/e3/cc54e3b694c880c42df725e83a5340cf.jpg';
let numClosedCards = 3;
let openCard1;
let openCard2;
let openCard3;
const closedCard = 'https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png';
let startButton = document.getElementById('start');
let quote = document.getElementById('winningquote');
let currentlyPlaying = true;

function isJoker (card) {
    if (card.src === joker) {
      return true;
    } else {
      return false;
    }
  };

  function isClicked (card) {
    if (card.src === closedCard) {
      return false;
    } else {
      return true;
    }
  };

  function playCard (card) {
    numClosedCards--;
    if (numClosedCards === 0) {
      gameOver('win');
    } else if (isJoker(card)) {
      gameOver();
    }
  };

  let randomCardGenerator = () => {
    let card = Math.floor(Math.random() * numClosedCards);
    if (card === 0) {
      openCard1 = joker;
      openCard2 = clubs;
      openCard3 = hearts;
    } else if (card === 1) {
      openCard2 = joker;
      openCard1 = clubs;
      openCard3 = hearts;
    } else if (card === 2) {
      openCard3 = joker;
      openCard1 = hearts;
      openCard2 = clubs;
    }
  };

  cardImage1.onclick = () => {
    if (currentlyPlaying === true && !isClicked(cardImage1)) {
      cardImage1.src = openCard1;
    playCard(cardImage1);
    }
  };

  cardImage2.onclick = () => {
    if (currentlyPlaying === true && !isClicked(cardImage2)) {
    cardImage2.src = openCard2;
    playCard(cardImage2);
    }
  };
  
  cardImage3.onclick = () => {
    if (currentlyPlaying === true && !isClicked(cardImage3)) {
    cardImage3.src = openCard3;
    playCard(cardImage3);
    }
  };

  startButton.onclick = () => {
    if (!currentlyPlaying) {
  startRound();
  }};

  function startRound () {
    cardImage1.src = closedCard;
    cardImage2.src = closedCard;
    cardImage3.src = closedCard;
    numClosedCards = 3;
    startButton.innerHTML = 'Good Luck!';
    quote.innerHTML = '~';
    currentlyPlaying = true;
    randomCardGenerator();
  };

  function gameOver (status) {
    if (status === 'win') {
      startButton.innerHTML = 'You win! Play again?';
      quote.innerHTML = '~Why so serious?~'
    } else {
      startButton.innerHTML = 'Game over! Play again?';
      quote.innerHTML = "~Life's a gamble, better take your chance~";
    }
    currentlyPlaying = false;
  };

  startRound();

  