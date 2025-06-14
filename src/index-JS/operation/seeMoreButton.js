import { createBookList } from "../createHtml/createBookList.js";
import { getBookApi } from "../service/getBookapi";

const list = document.querySelector(".magazine");
const categoryTitle = document.querySelector(".shop_title");

list.addEventListener("click", seeMore);

function seeMore(event) {
    const element = event.target;

    if (element.classList.contains("magazine__button")) {
        getBookApi(`https://books-backend.p.goit.global/books/category?category=${element.getAttribute("data-type")}`).then((data) => {
            createBookList(data);
        });

        const text = element.getAttribute("data-type").split(" ");

        categoryTitle.innerHTML = `${text.slice(0, -1).join(" ")} <span class="shop_title-purpure">${text.at(-1)}</span>`;
    } else {
        return;
    }
}