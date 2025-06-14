const noLoginbacdrop = document.querySelector(".phone-bacdrop");
const loginbacdrop = document.querySelector(".phoneLogin-bacdrop");
const name = document.querySelector(".phoneLogin__account-name");

let openButton;
let closeButton;

export const inicalization = function () {
    openButton = document.querySelector(".header__menu-button");
    closeButton = document.querySelector(".phone__close-button");

    if (openButton !== null || closeButton !== null) {
        openButton.addEventListener("click", openModal)
        closeButton.addEventListener("click", closeModal);
    }
}

function openModal() {
    if (JSON.parse(localStorage.getItem("status")) === "no login") {
        noLoginbacdrop.classList.remove("is-hidden");
    } else if (JSON.parse(localStorage.getItem("status")) === "login") {
        loginbacdrop.classList.remove("is-hidden");
        name.textContent = JSON.parse(localStorage.getItem("account")).name;
    }

    openButton.style.display = "none";
    closeButton.style.display = "flex";
}

export function closeModal() {
    if (JSON.parse(localStorage.getItem("status")) === "no login") {
        noLoginbacdrop.classList.add("is-hidden");
    } else if (JSON.parse(localStorage.getItem("status")) === "login") {
        loginbacdrop.classList.add("is-hidden");
    }
    openButton.style.display = "flex";
    closeButton.style.display = "none";
}