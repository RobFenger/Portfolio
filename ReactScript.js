
let body = document.getElementById("body");
let reactHeader = document.getElementById("header");


let reactMenuItems = document.getElementsByClassName("menu-item");
let reactMenuIcon = document.getElementsByClassName("menu-icon");
let reactRobFenger = document.getElementById("h1");
let reactDropdownItems = document.getElementsByClassName("dd-menu-item");


let reactDropdownMenu = document.getElementById("dropdown-menu");


const setMode = (key) => {
  let styles = localStorage.getItem(key);
  return styles;
}

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


let reactMenuAbout = document.getElementById("menu-about");
let reactMenuProjects = document.getElementById("menu-projects");
let reactMenuSkills = document.getElementById("menu-skills");
let reactMenuContact = document.getElementById("menu-contact");

const hover = (element) => {
  element.onmouseenter = () => {
    element.style.color = 'lightseagreen';
  }
}

hover(reactMenuAbout);
hover(reactMenuProjects);
hover(reactMenuSkills);
hover(reactMenuContact);

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

