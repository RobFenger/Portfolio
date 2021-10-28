let menuIcon = document.getElementsByClassName("menu-icon");
let robFenger = document.getElementById("h1");
let dropdownItems = document.getElementsByClassName("dd-menu-item");
let header = document.getElementById("header");
let menuItems = document.getElementsByClassName("menu-item");
let body = document.body;



const setMode = (key) => {
  let style = localStorage.getItem(key);
  return style;
}

const setFromStorage = () => {
    
        let i;
        for (i = 0; i < menuItems.length; i++) {
        menuItems[i].style.color = setMode('menuItemsColor');
        };
        let j;
        for (j = 0; j < menuIcon.length; j++) {
        menuIcon[j].style.backgroundColor = setMode('menuIconBackgroundColor');
        };
        let k;
        for (k = 0; k < dropdownItems.length; k++) {
        dropdownItems[k].style.color = setMode('dropdownItemsColor');
        };
        body.style.backgroundColor = setMode("pageBackgroundColor");
        body.style.color = /*setMode("pageColor")*/"snow";
    
}

setFromStorage();
