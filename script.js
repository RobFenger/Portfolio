let iconContainer = document.getElementById("icon-container");
let dropdownMenu = document.getElementById("dropdown-menu");

iconContainer.onclick = () => {
  if (dropdownMenu.style.visibility === 'hidden') {
    dropdownMenu.style.visibility = 'visible';
  } else {
    dropdownMenu.style.visibility = 'hidden';
  }
}

document.onmouseup = (event) => {
  if (event.target !== dropdownMenu) {
    dropdownMenu.style.visibility = 'hidden';
  }
}  




let down = document.getElementById("down");
let page = document.getElementById("page");
let up = document.getElementById("up");
let front = document.getElementById("front");

let a = window.matchMedia("(max-height: 700px)");
let b = window.matchMedia("(max-height: 600px)");
let c = window.matchMedia("(max-height: 500px)");
let d = window.matchMedia("(max-height: 400px)");
let e = window.matchMedia("(max-height: 300px)");
let f = window.matchMedia("(max-height: 200px)");
let g = window.matchMedia("(min-device-width: 320px)");
let h = window.matchMedia("(max-device-width: 480px)");



down.onclick = () => {
  page.style.top = '55px';
}

up.onclick = () => {
  if (f.matches) {
    page.style.top = '200px';
  } else if (e.matches) {
    page.style.top = '300px';
  } else if (d.matches) {
    page.style.top = '400px';
  } else if (c.matches) {
    page.style.top = '500px';
  } else if (b.matches) {
    page.style.top = '600px';
  } else if (a.matches) {
    page.style.top = '700px';
  } else if (g.matches && h.matches) {
    page.style.top = '1800px';
  }
}



let darkButton = document.getElementById("dark");
let lightButton = document.getElementById("light");
let toggle = document.getElementById("toggle");
let header = document.getElementById("header");
let menuItems = document.getElementsByClassName("menu-item");
let codecademy = document.getElementById("codecademy");
let menuIcon = document.getElementsByClassName("menu-icon");
let robFenger = document.getElementById("h1");
let dropdownItems = document.getElementsByClassName("dd-menu-item");


darkButton.onclick = () => {
  page.style.color = 'snow';
  page.style.backgroundColor = 'black';
  toggle.style.border = 'solid white 1px';
  up.style.color = 'snow';
  header.style.backgroundColor = 'black';
  codecademy.style.color = 'snow';
  dropdownMenu.style.backgroundColor = 'black';
  let i;
  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].style.color = 'snow';
  };
  let j;
  for (j = 0; j < menuIcon.length; j++) {
    menuIcon[j].style.backgroundColor = 'snow';
  };
  let k;
  for (k = 0; k < dropdownItems.length; k++) {
    dropdownItems[k].style.color = 'snow';
  };
  if (g.matches && h.matches) {
    robFenger.style.color = 'snow';
  }
}

lightButton.onclick = () => {  
  page.style.color = 'black';
  page.style.backgroundColor = 'snow';
  toggle.style.border = 'solid black 1px';
  up.style.color = "black";
  header.style.backgroundColor = 'snow';
  codecademy.style.color = 'black';
  dropdownMenu.style.backgroundColor = 'snow';
  let i;
  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].style.color = 'black';
  };
  let j;
  for (j = 0; j < menuIcon.length; j++) {
    menuIcon[j].style.backgroundColor = 'black';
  };
  let k;
  for (k = 0; k < dropdownItems.length; k++) {
    dropdownItems[k].style.color = 'black';
  };
  if (g.matches && h.matches) {
    robFenger.style.color = 'black';
  }
}

up.onmouseenter = () => {
  up.style.color = 'lightseagreen';
}

up.onmouseleave = () => {
  if (page.style.backgroundColor === 'snow') {
    up.style.color = 'black';
  } else {
    up.style.color = 'snow';
  }
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
  }
};

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

  