import { postAccount } from "../service/postAccount";
import { getAccount } from "../service/getAccountApi";
import { buildHeader } from "../createHtml/buildHeader";
import { inicalization } from "../modal/phoneModal";

const closeButton = document.querySelector(".login-modal__close-button");
const openButtonInPhone = document.querySelector(".phone__open-button");
const openButtonInDesktop = document.querySelector(".header__open-button");
const submitButton = document.querySelector(".login-modal__submit-button");
const bacdrop = document.querySelector(".login-modal-bacdrop");
const modalTypeButtons = document.querySelector(".login-modal__change-type");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

if (JSON.parse(localStorage.getItem("status")) === "no login") {
    openButtonInDesktop.addEventListener("click", openModal);
    openButtonInPhone.addEventListener("click", openModal);
} else{
    return;
}

closeButton.addEventListener("click", closeModal);
submitButton.addEventListener("click", submitInfo);
modalTypeButtons.addEventListener("click", changeModalType)

let modalType = "sing up";

function openModal() {
    bacdrop.classList.remove("is-hidden");
}

export function closeModal() {
    bacdrop.classList.add("is-hidden");
}

function changeModalType(event) {
    const element = event.target;
    const activeModalButton = document.querySelector(".active-modal");

    if (element === activeModalButton) {
        return;
    } else if (element !== activeModalButton) {
        element.classList.add("active-modal");
        activeModalButton.classList.remove("active-modal");
        modalType = element.id;
        submitButton.textContent = element.id;
    }
}

export function submitInfo(event) {

    event.preventDefault();

    if (modalType === "sing up") {
        const newAcount = {
            name: `${nameInput.value}`,
            email: `${emailInput.value}`,
            avatar: "",
            cards: [],
            password: `${passwordInput.value}`,
        };

        postAccount(newAcount);
        localStorage.setItem("account", JSON.stringify(newAcount));
        localStorage.setItem("status", JSON.stringify("login"));
        buildHeader(JSON.parse(localStorage.getItem("account")));
        closeModal();

        return;
    } else if (modalType === "sing in") {
        getAccount(nameInput.value, emailInput.value).then((data) => {
            const account = data[0];

            if (passwordInput.value === account.password) {
                localStorage.setItem("account", JSON.stringify(account));
                localStorage.setItem("status", JSON.stringify("login"));
                buildHeader(JSON.parse(localStorage.getItem("account")));
                closeModal();
            } else {
                return;
            }
        });
    };
};

inicalization()