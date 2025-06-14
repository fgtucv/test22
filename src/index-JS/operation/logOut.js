const logOutButton = document.querySelector(".header__exit-button");
const logOutButtonInPhone = document.querySelector(".phoneLogin__exit-button");
const openAndCloseButton = document.querySelector(".header__account-button");

if (JSON.parse(localStorage.getItem("status")) === "login") {
    openAndCloseButton.addEventListener("click", howOrHideButton);
} else {
    return;
}

function howOrHideButton() {
    if (logOutButton.classList.contains("is-hidden")) {
        logOutButton.classList.remove("is-hidden")
    } else if (!logOutButton.classList.contains("is-hidden")) {
        logOutButton.classList.add("is-hidden")
    }
}

if (JSON.parse(localStorage.getItem("status")) === "login") {
    logOutButton.addEventListener("click", logOut);
    logOutButtonInPhone.addEventListener("click", logOut);
} else {
    return;
}

function logOut() {
    localStorage.clear();
    location.reload();
}