//get the elements from the DOM to set black or white mode on the page
let body = document.getElementById("body");
let reactHeader = document.getElementById("header");
let reactMenuItems = document.getElementsByClassName("menu-item");
let reactMenuIcon = document.getElementsByClassName("menu-icon");
let reactRobFenger = document.getElementById("h1");
let reactDropdownItems = document.getElementsByClassName("dd-menu-item");
let reactDropdownMenu = document.getElementById("dropdown-menu");

//get the settings from localStorage
const setMode = (key) => {
  let styles = localStorage.getItem(key);
  return styles;
}

//use function setMode to set the right settings for black or white mode
const setFromStorage = () => {
  reactHeader.style.backgroundColor = setMode("headerBackgroundColor");
  reactDropdownMenu.style.backgroundColor = setMode("dropdownMenuBackgroundColor");
  let i;
  for (i = 0; i < reactMenuItems.length; i++) {
    reactMenuItems[i].style.color = setMode('menuItemsColor');
  };
  let j;
  for (j = 0; j < reactMenuIcon.length; j++) {
    reactMenuIcon[j].style.backgroundColor = setMode('menuIconBackgroundColor');
  };
  let k;
  for (k = 0; k < reactDropdownItems.length; k++) {
    reactDropdownItems[k].style.color = setMode('dropdownItemsColor');
  };
  body.style.backgroundColor = setMode("pageBackgroundColor");
  body.style.color = setMode("pageColor"); 
  reactDropdownMenu.style.backgroundColor = setMode("dropdownMenuBackgroundColor");
}

setFromStorage();

//get the elements from the DOM for hover functions
let reactMenuAbout = document.getElementById("menu-about");
let reactMenuProjects = document.getElementById("menu-projects");
let reactMenuSkills = document.getElementById("menu-skills");
let reactMenuContact = document.getElementById("menu-contact");

//to set the color when hovering over menu-items
const hover = (element) => {
  element.onmouseenter = () => {
    element.style.color = 'lightseagreen';
  }
}

hover(reactMenuAbout);
hover(reactMenuProjects);
hover(reactMenuSkills);
hover(reactMenuContact);

//to set the color back to what it was after hovering over menu-items
const hoverOut = (element) => {
  element.onmouseleave = () => {
    if (body.style.backgroundColor === 'snow') {
      element.style.color = 'black';
    } else {
      element.style.color = 'snow';
    }
  }
}

hoverOut(reactMenuAbout);
hoverOut(reactMenuProjects);
hoverOut(reactMenuSkills);
hoverOut(reactMenuContact);

