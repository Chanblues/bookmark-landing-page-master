function openContent(evt, content) {
    let featureInfo = document.getElementsByClassName("feature_info");
    let featureTab = document.getElementById("feature_tab").children;
    for (let i = 0; i < featureInfo.length; i++) {
        featureInfo[i].style.display = "none";
    }

    for (let i = 0; i < featureInfo.length; i++) {
        featureTab[i].className = "";
    }

    document.getElementById(content).style.display = "flex";
    evt.currentTarget.className = "active";
}

const question = document.getElementsByClassName("question");
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {

    question[i].addEventListener('click', () => {
        let panel = question[i].nextElementSibling;
        if (panel.style.display == "block") {
            panel.style.display = "none";
            question[i].style.backgroundImage = "url('./images/icon-arrow.svg')";
        } else {
            panel.style.display = "block";
            question[i].style.backgroundImage = "url('./images/uparrow.svg')";
        }
    })
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const email = document.getElementsByTagName("form");

email[0].addEventListener('submit', (e) => {
    e.preventDefault();
    let userEmail = document.getElementsByClassName('userinput');
    let errorMessage = document.getElementsByTagName("span");

    if (validateEmail(userEmail[0].value)) {
        errorMessage[0].style.opacity = "0";
        userEmail[0].classList.remove('error');
    } else {
        errorMessage[0].style.opacity = "1";
        userEmail[0].classList.add('error');
    }
})

const menuTab = document.getElementById("menu_tab");
const screenMatch = window.matchMedia('(min-width: 822px)');

function showNav() {
    let menuLink = document.getElementById("topnav_link");
    let topNav = document.getElementById("topnav");
    let menuLogo = document.getElementById("menu_logo");
    let socialIcon = document.getElementById("social_icons");

    if (menuLink.style.opacity == 0) {
        menuLink.style.opacity = 1;
        topNav.style.backgroundColor = "hsla(229, 31%, 21%, 0.9)";
        menuLogo.src = "./images/menulogo.svg";
        menuTab.src = "./images/whamburger.svg";
        socialIcon.style.opacity = 1;
    } else {
        menuLink.style.opacity = "";
        topNav.style.backgroundColor = "";
        menuLogo.src = "./images/logo-bookmark.svg";
        menuTab.src = "./images/icon-hamburger.svg";
        socialIcon.style.display = 0;
    }
    

}

document.getElementById("default").click();
