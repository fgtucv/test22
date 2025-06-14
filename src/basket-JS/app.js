import { buildHeader } from "./createHtml/buildHeader.js";
import { buildShopingList } from "./createHtml/buildShopingList.js";
import { getAccountApi } from "./service/getAccountApi.js";
import { buildPaginationList } from "../basket-JS/createHtml/buildPaginationList.js";
import { inicalization } from "../index-JS/modal/phoneModal.js";

const paginationDiv = document.querySelector(".shoping-list__pagination-div");
const body = document.querySelector("body");

let page1 = 1;
let page2 = 4;

paginationDiv.addEventListener("click", pagination);

buildHeader(JSON.parse(localStorage.getItem("account")));

getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {
    buildShopingList(data[0].cards.slice(page1 - 1, page2 - 1));
    buildPaginationList(data[0].cards.length);
});

function pagination(event) {
    const element = event.target;
    const active = document.querySelector(".active-number");
    const buffer = document.getElementById("buffer");
    const list = document.querySelector(".shoping-list__pagination-list");

    list.lastChild.remove();

    if (element.classList.contains("shoping-list__pagination-number") && element.id !== "buffer") {

        page2 = Number(element.textContent) * 3;
        page1 = page2 - 3

        getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {
            buildShopingList(data[0].cards.slice(page1, page2));
        });

        active.classList.remove("active-number");
        element.classList.add("active-number");
    } else if (element.classList.contains("shoping-list__pagination-back-too") && page1 >= 3) {

        getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {
            const backActive = document.getElementById(`0button`)
            
            backActive.classList.add("active-number");
            active.classList.remove("active-number");

            buildShopingList(data[0].cards.slice(0, 3));
        });

        list.appendChild(buffer);
    } else if (element.classList.contains("shoping-list__pagination-back") && page1 >= 3) {

        const backPage = document.getElementById(`${Number.parseInt(active.id) - 1}button`);

        page1 = page1 - 3;
        page2 = page2 - 3;

        getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {
            buildShopingList(data[0].cards.slice(page1, page2));
        });

        if(body.offsetWidth < 768 && Number.parseInt(active.id) - 2 >= 0){
            backPage.parentNode.classList.remove("is-hidden");

            const noHideElement = document.getElementById(`${Number.parseInt(active.id) - 2}button`);

            noHideElement.parentNode.classList.remove("is-hidden");
            active.parentNode.classList.add("is-hidden");
        }

        buffer.classList.remove("is-hidden");

        active.classList.remove("active-number");
        backPage.classList.add("active-number");

        list.appendChild(buffer);
    } else if (element.classList.contains("shoping-list__pagination-forward") && document.getElementById(`${Number.parseInt(active.id) + 1}button`) !== null) {

        const nextPage = document.getElementById(`${Number.parseInt(active.id) + 1}button`);

        page1 = page1 + 3;
        page2 = page2 + 3;

        getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {
            buildShopingList(data[0].cards.slice(page1, page2));
        });

        if(body.offsetWidth < 768 && Number.parseInt(active.id) - 1 >= 0){
            nextPage.parentNode.classList.remove("is-hidden");

            const hideElement = document.getElementById(`${Number.parseInt(active.id) - 1}button`);

            hideElement.parentNode.classList.add("is-hidden");
        }

        active.classList.remove("active-number");
        nextPage.classList.add("active-number");
    } else if (element.classList.contains("shoping-list__pagination-forward-too") && document.getElementById(`${Number.parseInt(active.id) + 1}button`) !== null) {

        page1 = page1 + 3;
        page2 = page2 + 3;

        getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {
            page1 =  Number.parseInt(data[0].cards.length / 3 + 1) * 3 - 3;
            page2 = Number.parseInt(data[0].cards.length / 3 + 1) * 3;

            const nextActive = document.getElementById(`${Number.parseInt(data[0].cards.length / 3)}button`);
            const beforActive = document.getElementById(`${Number.parseInt(data[0].cards.length / 3 - 1)}button`);
            const secondElement = document.getElementById("1button");
            
            
            nextActive.classList.add("active-number");
            active.classList.remove("active-number");
            nextActive.parentNode.classList.remove("is-hidden");
            active.parentNode.classList.add("is-hidden");
            beforActive.parentNode.classList.remove("is-hidden");
            secondElement.parentNode.classList.add("is-hidden");

            // console.log(nextActive)
            // console.log(beforActive)
            // console.log(active)            

            buildShopingList(data[0].cards.slice(page1, page2));
        });

        list.insertBefore(buffer, list.firstChild);
    }
};

inicalization();