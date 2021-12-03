let dropdownMenu = document.getElementById("dropdown-menu");

//jquery
$(document).ready(() => {

  //in small screen or mobile device to open up and close dropdownmenu when clicking the menu-icon
  $('#icon-container').on('click', () => {
    $('#dropdown-menu').slideToggle();
  })

  //when selecting a section close the dropdownmenu
  $('#dropdown-menu').children().children().on('click', () => {
    $('#dropdown-menu').slideUp();
  })

  //close the dropdownmenu when clicking outside the header (and its descendants)
  $(document).on('click', event => {
    const container = $("header");
    if (!container.is(event.target) && container.has(event.target).length === 0) {
        $('#dropdown-menu').slideUp();
    }
  }) 


  //hover-effect over the dropdownmenu-items with recognition of black or white setting of the page
  $('#dropdown-menu').children().children().on('mouseenter', event => {
    $(event.currentTarget).css('color', 'lightseagreen');
  })
  $('#dropdown-menu').children().children().on('mouseleave', event => {
    if (localStorage.getItem("headerBackgroundColor")) {
      if (document.URL.includes("react")) {
        $(event.currentTarget).css('color',  setMode("pageColor"));
      } else {
        $(event.currentTarget).css('color',  setStyles("pageColor"));
      }
    } else {
      $(event.currentTarget).css('color', 'white');
     }
  })
})




let down = document.getElementById("down");
let page = document.getElementById("page");
let up = document.getElementById("up");

//to find the height of the screen
let a = window.matchMedia("(max-height: 700px)");
let b = window.matchMedia("(max-height: 600px)");
let c = window.matchMedia("(max-height: 500px)");
let d = window.matchMedia("(max-height: 400px)");
let e = window.matchMedia("(max-height: 300px)");
let f = window.matchMedia("(max-height: 200px)");
let g = window.matchMedia("(min-device-width: 320px)");
let h = window.matchMedia("(max-device-width: 480px)");
let l = window.matchMedia("(min-device-width: 375px)");
let m = window.matchMedia("(max-device-width: 667px)");
let n = window.matchMedia("(max-device-width: 812px)");
let o = window.matchMedia("(-webkit-min-device-pixel-ratio: 3)")
let x = window.matchMedia("(min-device-width: 768px)");
let y = window.matchMedia("(max-device-width: 1024px)");
let portrait = window.matchMedia("(orientation: portrait)");
let landscape = window.matchMedia("(orientation: landscape)");


//to make the main-page slide over the front-poge depending on the height of the screen
down.onclick = () => {
  page.style.top = '55px';
  if (g.matches && h.matches) {
    page.style.top = '110px';
  } else if (l.matches && m.matches && landscape.matches) {
    page.style.top = '82.5px';
  } else if (x.matches && y.matches && portrait.matches) {
    page.style.top = '82.5px';
  }
}

//to make the main-page slide back again
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
  } else if (x.matches && y.matches && portrait.matches) {
    page.style.top = '1320px';
  } else if (x.matches && y.matches && landscape.matches) {
    page.style.top = '768px';
  } 
}



let darkButton = document.getElementById("dark");
let lightButton = document.getElementById("light");
let toggle = document.getElementById("toggle");
let header = document.getElementById("header");
let menuItems = document.getElementsByClassName("menu-item");
let codecademy = document.getElementById("codecademy");
let certificate = document.getElementById("certificate");
let menuIcon = document.getElementsByClassName("menu-icon");
let robFenger = document.getElementById("h1");
let dropdownItems = document.getElementsByClassName("dd-menu-item");
let front = document.getElementById("front");


//to set key-value pairs into local storage
const populateStorage = (key, value) => {
  localStorage.setItem(key, value);
}
//to get the value from the key 
const setStyles = (key) => {
  let style = localStorage.getItem(key);
  return style;
}

//check if there is some value in localStorage and if so use it to decide which colors elements must have
const toggleStorage = () => {
if (localStorage.getItem("headerBackgroundColor")) {
  front.style.backgroundColor = setStyles('frontBackgroundColor');
  page.style.color = setStyles("pageColor");
  page.style.backgroundColor = setStyles("pageBackgroundColor");
  toggle.style.border = setStyles("toggleBorder");
  up.style.color = setStyles("upColor");
  down.style.color = setStyles("downColor");
  header.style.backgroundColor = setStyles("headerBackgroundColor");
  codecademy.style.color = setStyles("codecademyColor");
  certificate.style.color = setStyles("certificateColor");
  dropdownMenu.style.backgroundColor = setStyles("dropdownMenuBackgroundColor");

  //loops to target all the class elements at once
  let i;
  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].style.color = setStyles('menuItemsColor');
  };
  let j;
  for (j = 0; j < menuIcon.length; j++) {
    menuIcon[j].style.backgroundColor = setStyles('menuIconBackgroundColor');
  };
  let k;
  for (k = 0; k < dropdownItems.length; k++) {
    dropdownItems[k].style.color = setStyles('dropdownItemsColor');
  };
  if (g.matches && h.matches) {
    robFenger.style.color = setStyles('robFengerColor');
  };
  
}
}

//trigger the function when the page is started so the localStorage will be checked right away
toggleStorage();

//if dark-button is selected populate localStorage with the corresponding key-value pairs
darkButton.onclick = () => {
  populateStorage("frontBackgroundColor", "black");
  populateStorage("pageColor", "snow");
  populateStorage("pageBackgroundColor", "black");
  populateStorage("toggleBorder", "solid white 1px");
  populateStorage("upColor", "snow");
  populateStorage("downColor", "snow");
  populateStorage("headerBackgroundColor", "black");
  populateStorage("codecademyColor", "snow");
  populateStorage("certificateColor", "snow");
  populateStorage("dropdownMenuBackgroundColor", "black");
  populateStorage("menuItemsColor", "snow");
  populateStorage("menuIconBackgroundColor", "snow");
  populateStorage("dropdownItemsColor", "snow");
  populateStorage("robFengerColor", "snow");
 
  toggleStorage();
}

//if light-button is selected populate localStorage with the corresponding key-value pairs
lightButton.onclick = () => {
  populateStorage("frontBackgroundColor", "snow");
  populateStorage("pageColor", "black");
  populateStorage("pageBackgroundColor", "snow");
  populateStorage("toggleBorder", "solid black 1px");
  populateStorage("upColor", "black");
  populateStorage("downColor", "black");
  populateStorage("headerBackgroundColor", "snow");
  populateStorage("codecademyColor", "black");
  populateStorage("certificateColor", "black");
  populateStorage("dropdownMenuBackgroundColor", "snow");
  populateStorage("menuItemsColor", "black");
  populateStorage("menuIconBackgroundColor", "black");
  populateStorage("dropdownItemsColor", "black");
  populateStorage("robFengerColor", "black");
  
  toggleStorage();
}



let menuAbout = document.getElementById("menu-about");
let menuProjects = document.getElementById("menu-projects");
let menuSkills = document.getElementById("menu-skills");
let menuContact = document.getElementById("menu-contact");

//to get the right hover effects depending on black or white mode
const menuHover = (element) => {
  element.onmouseenter = () => {
    element.style.color = 'lightseagreen';
  }
}

const menuHoverOut = (element) => {
  element.onmouseleave = () => {
    if (page.style.backgroundColor === 'snow') {
      element.style.color = 'black';
    } else {
      element.style.color = 'snow';
    }
  }
}

menuHover(menuAbout);
menuHover(menuProjects);
menuHover(menuSkills);
menuHover(menuContact);
menuHover(up);
menuHover(down);
menuHover(codecademy);
menuHover(certificate);


menuHoverOut(menuAbout);
menuHoverOut(menuProjects);
menuHoverOut(menuSkills);
menuHoverOut(menuContact);
menuHoverOut(up);
menuHoverOut(down);
menuHoverOut(codecademy);
menuHoverOut(certificate);



//javascript for the cardgame
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


//to trigger the animations for the lines when the line is coming into the screen
const lineMachine = (line, animation, wrapper) => {
  const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const lineNumber = entry.target.querySelector(line);
    if (entry.isIntersecting) {
      lineNumber.classList.add(animation);
      return;
    }
    lineNumber.classList.remove(animation);
  });
});
  observer.observe(document.querySelector(wrapper));
}

lineMachine('.line1', 'line1-animation', '.line1-wrapper');
lineMachine('.line2', 'line2-animation', '.line2-wrapper');
lineMachine('.line3', 'line3-animation', '.line3-wrapper');
lineMachine('.line4', 'line4-animation', '.line4-wrapper');
lineMachine('.line5', 'line5-animation', '.line5-wrapper');
lineMachine('.line6', 'line6-animation', '.line6-wrapper');
lineMachine('.line7', 'line7-animation', '.line7-wrapper');
lineMachine('.line8', 'line8-animation', '.line8-wrapper');
lineMachine('.line9', 'line9-animation', '.line9-wrapper');
lineMachine('.line10', 'line10-animation', '.line10-wrapper');
lineMachine('.line11', 'line11-animation', '.line11-wrapper');
lineMachine('.line12', 'line12-animation', '.line12-wrapper');



