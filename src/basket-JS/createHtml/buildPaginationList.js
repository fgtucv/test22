const list = document.querySelector(".shoping-list__pagination-list");
const body = document.querySelector("body");

export function buildPaginationList(qwentety) {
    let html = [];

    for (let i = 1; i < Number.parseInt(qwentety / 3) + 1; i++) {
        if (Number.parseInt(qwentety / 3) + 1 > 2 && i + 1 > 2 && body.offsetWidth < 768) {
            html.push(`<li class="shoping-list__pagination-item is-hidden"><button id="${i}button" type="button" class="shoping-list__pagination-number">${i + 1}</button></li>`);
            if(i === Number.parseInt(qwentety / 3)){
                html.push(`<li class="shoping-list__pagination-item"><button id="buffer" type="button" class="shoping-list__pagination-number">...</button></li>`);
            }
        } else {
            html.push(`<li class="shoping-list__pagination-item"><button id="${i}button" type="button" class="shoping-list__pagination-number">${i + 1}</button></li>`);
        }
    };

    list.insertAdjacentHTML("beforeend", html.join(""));
}