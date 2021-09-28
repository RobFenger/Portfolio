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


darkButton.onclick = () => {
  front.style.backgroundColor = 'black';
  page.style.color = 'snow';
  page.style.backgroundColor = 'black';
  toggle.style.border = 'solid white 1px';
  up.style.color = 'snow';
  down.style.color = 'snow';
  header.style.backgroundColor = 'black';
  codecademy.style.color = 'snow';
  certificate.style.color = 'snow';
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
  front.style.backgroundColor = 'snow'; 
  page.style.color = 'black';
  page.style.backgroundColor = 'snow';
  toggle.style.border = 'solid black 1px';
  up.style.color = "black";
  down.style.color = 'black';
  header.style.backgroundColor = 'snow';
  codecademy.style.color = 'black';
  certificate.style.color = 'black';
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

down.onmouseenter = () => {
  down.style.color = 'lightseagreen';
}

down.onmouseleave = () => {
  if (page.style.backgroundColor === 'snow') {
    down.style.color = 'black';
  } else {
    down.style.color = 'snow';
  }
}

codecademy.onmouseenter = () => {
  codecademy.style.color = 'lightseagreen';
}

certificate.onmouseenter = () => {
  certificate.style.color = 'lightseagreen';
}

codecademy.onmouseleave = () => {
  if (page.style.backgroundColor === 'snow') {
    codecademy.style.color = 'black';
  } else {
    codecademy.style.color = 'snow';
  }
}

certificate.onmouseleave = () => {
  if (page.style.backgroundColor === 'snow') {
    certificate.style.color = 'black';
  } else {
    certificate.style.color = 'snow';
  }
}



let menuAbout = document.getElementById("menu-about");
let menuProjects = document.getElementById("menu-projects");
let menuSkills = document.getElementById("menu-skills");
let menuContact = document.getElementById("menu-contact");

menuAbout.onmouseenter = () => {
  menuAbout.style.color = 'lightseagreen';
}

menuProjects.onmouseenter = () => {
  menuProjects.style.color = 'lightseagreen';
}

menuSkills.onmouseenter = () => {
  menuSkills.style.color = 'lightseagreen';
}

menuContact.onmouseenter = () => {
  menuContact.style.color = 'lightseagreen';
}

menuAbout.onmouseleave = () => {
  if (page.style.backgroundColor === 'snow') {
    menuAbout.style.color = 'black';
  } else {
    menuAbout.style.color = 'snow';
  }
}

menuProjects.onmouseleave = () => {
  if (page.style.backgroundColor === 'snow') {
    menuProjects.style.color = 'black';
  } else {
    menuProjects.style.color = 'snow';
  }
}

menuSkills.onmouseleave = () => {
  if (page.style.backgroundColor === 'snow') {
    menuSkills.style.color = 'black';
  } else {
    menuSkills.style.color = 'snow';
  }
}

menuContact.onmouseleave = () => {
  if (page.style.backgroundColor === 'snow') {
    menuContact.style.color = 'black';
  } else {
    menuContact.style.color = 'snow';
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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line = entry.target.querySelector('.line1');

    if (entry.isIntersecting) {
      line.classList.add('line1-animation');
     return; 
    }

    line.classList.remove('line1-animation');
  });
});

observer.observe(document.querySelector('.line1-wrapper'));

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line2 = entry.target.querySelector('.line2');

    if (entry.isIntersecting) {
      line2.classList.add('line2-animation');
     return; 
    }

    line2.classList.remove('line2-animation');
  });
});

observer2.observe(document.querySelector('.line2-wrapper'));

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line3 = entry.target.querySelector('.line3');

    if (entry.isIntersecting) {
      line3.classList.add('line3-animation');
     return; 
    }

    line3.classList.remove('line3-animation');
  });
});

observer3.observe(document.querySelector('.line3-wrapper'));


const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line4 = entry.target.querySelector('.line4');

    if (entry.isIntersecting) {
      line4.classList.add('line4-animation');
     return; 
    }

    line4.classList.remove('line4-animation');
  });
});

observer4.observe(document.querySelector('.line4-wrapper'));

const observer8 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line8 = entry.target.querySelector('.line8');

    if (entry.isIntersecting) {
      line8.classList.add('line8-animation');
     return; 
    }

    line8.classList.remove('line8-animation');
  });
});

observer8.observe(document.querySelector('.line8-wrapper'));


const observer6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line6 = entry.target.querySelector('.line6');

    if (entry.isIntersecting) {
      line6.classList.add('line6-animation');
     return; 
    }

    line6.classList.remove('line6-animation');
  });
});

observer6.observe(document.querySelector('.line6-wrapper'));


const observer7 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line7 = entry.target.querySelector('.line7');

    if (entry.isIntersecting) {
      line7.classList.add('line7-animation');
     return; 
    }

    line7.classList.remove('line7-animation');
  });
});

observer7.observe(document.querySelector('.line7-wrapper'));


const observer11 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line11 = entry.target.querySelector('.line11');

    if (entry.isIntersecting) {
      line11.classList.add('line11-animation');
     return; 
    }

    line11.classList.remove('line11-animation');
  });
});

observer11.observe(document.querySelector('.line11-wrapper'));


const observer12 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line12 = entry.target.querySelector('.line12');

    if (entry.isIntersecting) {
      line12.classList.add('line12-animation');
     return; 
    }

    line12.classList.remove('line12-animation');
  });
});

observer12.observe(document.querySelector('.line12-wrapper'));


const observer9 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line9 = entry.target.querySelector('.line9');

    if (entry.isIntersecting) {
      line9.classList.add('line9-animation');
     return; 
    }

    line9.classList.remove('line9-animation');
  });
});

observer9.observe(document.querySelector('.line9-wrapper'));


const observer10 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line10 = entry.target.querySelector('.line10');

    if (entry.isIntersecting) {
      line10.classList.add('line10-animation');
     return; 
    }

    line10.classList.remove('line10-animation');
  });
});

observer10.observe(document.querySelector('.line10-wrapper'));


const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line5 = entry.target.querySelector('.line5');

    if (entry.isIntersecting) {
      line5.classList.add('line5-animation');
     return; 
    }

    line5.classList.remove('line5-animation');
  });
});

observer5.observe(document.querySelector('.line5-wrapper'));

