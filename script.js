navDisplay = true;
document.getElementById("header-button").onclick = () => {
    let hideNav = document.getElementById("nav-head");
    if (navDisplay){
        hideNav.style.display = "none";
        navDisplay = false;
    }
    else{
        hideNav.style.display = "flex";
        navDisplay = true;
    }
let aboutSec = document.getElementById("about");
aboutSec.style.background = "black"
aboutSec.style.color= "blue"
let heading = document.getElementsByTagName("h3");
for (let i=0; i<heading.length; i++){
    heading[i].style.color = "#5c1444"
    }
}
document.getElementById("header-button").onmouseover = () => {
let alterNav = document.getElementsByClassName("nav-link");
for (let i=0; i<alterNav.length; i++)
alterNav[i].style.color = "purple"
let alterAdd = document.querySelectorAll("address");
alterAdd.forEach( add => {
    add.style.color = "blue"
    })
}
const buttonOne = document.getElementById("header-button")
const storeSec = document.getElementById("store")
