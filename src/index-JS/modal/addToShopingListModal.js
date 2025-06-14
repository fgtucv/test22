import { updateAccount } from "../service/updateAccount";

const list = document.querySelector(".magazine");
const backdrop = document.querySelector(".addModal-backdrop");
const closeButton =document.querySelector(".addModal__close-button");
const submitButton = document.querySelector(".addModal__button");
const img = document.querySelector(".addModal__img");
const title = document.querySelector(".addModal__title");
const text = document.querySelector(".addModal__text");
const name = document.querySelector(".addModal__name");

list.addEventListener("click", openAddToShopingListModal);
closeButton.addEventListener("click", closeAddToShopingListModal);
submitButton.addEventListener("click", addToShopingList);

let cardImg;
let cardTitle;
let cardText;
let cardName;
let cardId;
let amazon;
let aplleBook;
let cardType;

function openAddToShopingListModal(event) {
    const element = event.target.parentNode

    if(element.classList.contains("magazine__item") && element.id !== ""){
        img.src = element.getAttribute("data-img");
        title.textContent = element.getAttribute("data-title");
        text.textContent = element.getAttribute("data-description");
        name.textContent = element.getAttribute("data-author");

        cardImg = element.getAttribute("data-img");
        cardTitle = element.getAttribute("data-title");
        cardText = element.getAttribute("data-description");
        cardName = element.getAttribute("data-author");
        cardId = element.id;
        cardType = element.getAttribute("data-type");
        amazon = element.getAttribute("data-amazon");
        aplleBook = element.getAttribute("data-aplle");

        backdrop.classList.remove("is-hidden");
    }
}

function closeAddToShopingListModal() {
    backdrop.classList.add("is-hidden");
}

function addToShopingList() {
    const object = {
        id: cardId,
        imgUrl: cardImg,
        title: cardTitle,
        text: cardText,
        type: cardType,
        authorName: cardName,
        amazonBuyLink: amazon,
        aplleBookBuyLink: aplleBook,
    }

    let account = JSON.parse(localStorage.getItem("account"));
    let array = account.cards;

    array.push(object);

    localStorage.setItem("account", JSON.stringify(account));
    updateAccount(JSON.parse(localStorage.getItem("account")), JSON.parse(localStorage.getItem("account")).id);

    backdrop.classList.add("is-hidden");
}