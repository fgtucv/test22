const booksList = document.querySelector(".magazine");

export function createBookList(arr, category = false) {
    let html = "";

    if (category === false) {
        html = arr.map((obj) => {
            return `
        <li class="magazine__item" id="${obj._id}" data-img="${obj.book_image}" data-description="${obj.description}" data-type="${obj.list_name}" data-author="${obj.author}" data-title="${obj.title}" data-amazon="${obj.buy_links[0].url}" data-aplle="${obj.buy_links[1].url}">
            <img class="magazine__img" src="${obj.book_image}" alt="${obj.description}">
            <h3 class="magazine__book-name">${obj.title}</h3>
            <h4 class="magazine__book-author">${obj.author}</h4>
        </li>`;
        }).join("");
    } else if (category === true) {
        html = arr.map((obj) => {
            return `
        <li class="magazine__item">
            <h2 class="magazine__type-title">${obj.list_name}</h2>
            <ul class="magazine__book-list">
                <li class="magazine__item" id="${obj.books[0]._id}" data-img="${obj.books[0].book_image}" data-description="${obj.books[0].description}" data-type="${obj.books[0].list_name}" data-author="${obj.books[0].author}" data-title="${obj.books[0].title}" data-amazon="${obj.books[0].buy_links[0].url}" data-aplle="${obj.books[0].buy_links[1].url}">
                    <img class="magazine__img" src="${obj.books[0].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[0].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[0].author}</h4>
                </li>
                <li class="magazine__item" id="${obj.books[1]._id}" data-img="${obj.books[1].book_image}" data-description="${obj.books[1].description}" data-type="${obj.books[1].list_name}" data-author="${obj.books[1].author}" data-title="${obj.books[1].title}" data-amazon="${obj.books[1].buy_links[0].url}" data-aplle="${obj.books[1].buy_links[1].url}">
                    <img class="magazine__img" src="${obj.books[1].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[1].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[1].author}</h4>
                </li>
                <li class="magazine__item" id="${obj.books[2]._id}" data-img="${obj.books[2].book_image}" data-description="${obj.books[2].description}" data-type="${obj.books[2].list_name}" data-author="${obj.books[2].author}" data-title="${obj.books[2].title}" data-amazon="${obj.books[2].buy_links[0].url}" data-aplle="${obj.books[2].buy_links[1].url}">
                    <img class="magazine__img" src="${obj.books[2].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[2].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[2].author}</h4>
                </li>
                <li class="magazine__item" id="${obj.books[3]._id}" data-img="${obj.books[3].book_image}" data-description="${obj.books[3].description}" data-type="${obj.books[3].list_name}" data-author="${obj.books[3].author}" data-title="${obj.books[3].title}" data-amazon="${obj.books[3].buy_links[0].url}" data-aplle="${obj.books[3].buy_links[1].url}">
                    <img class="magazine__img" src="${obj.books[3].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[3].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[3].author}</h4>
                </li>
                <li class="magazine__item" id="${obj.books[4]._id}" data-img="${obj.books[4].book_image}" data-description="${obj.books[4].description}" data-type="${obj.books[4].list_name}" data-author="${obj.books[4].author}" data-title="${obj.books[4].title}" data-amazon="${obj.books[4].buy_links[0].url}" data-aplle="${obj.books[4].buy_links[1].url}">
                    <img class="magazine__img" src="${obj.books[4].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[4].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[4].author}</h4>
                </li>
            </ul>
            <button data-type="${obj.list_name}" type="button" class="magazine__button">SEE MORE</button>
        </li>`;
        }).join("");
    }

    booksList.innerHTML = html;
}