const uncompletedBookList = document.getElementById("uncompleted-list");
const completedBookList = document.getElementById("completed-list");
const plannedBookList = document.getElementById("planned-list");
const BOOK_ITEM_ID = "bookId"
let el;

function createStar(rate){
    const container = document.createElement("div");
    const star = document.createElement("div");
    const rating = document.createElement("div");

    rating.innerText=rate;
    rating.style.setProperty("width","100%");
    rating.style.setProperty("height","auto");

    if(rate!="-") {
        star.classList.add("star-color");
        rating.style.setProperty("color","gold");
    }
    else {
        star.classList.add("star-grayscale");
    }

    container.style.setProperty("align-items","flex-start");
    container.style.setProperty("display","flex");
    container.style.setProperty("flex","1");

    star.style.setProperty("flex","1");
    rating.style.setProperty("flex","1");

    container.append(star);
    container.append(rating);
    return container;
}

function createButton(buttonTypeClass, eventListener) {
    const button = document.createElement("button");
    button.classList.add(buttonTypeClass);
    button.addEventListener("click", function (event) {
        eventListener(event);
    });
    button.style.setProperty("flex","1");
    return button;
}

function removeBookFromList(element) {
    bukubuku.splice(findBukuIndex(element[BOOK_ITEM_ID]), 1);
    element.remove();
}

function editBookFromList(element) {
    panelReset();
    const buku = findBuku(element[BOOK_ITEM_ID]);
    addPanel.removeAttribute("hidden");
    el=element;
    modeToEdit(buku.title,buku.author,buku.year,buku.status,buku.rating);
}

function createEditButton() {
    return createButton("edit-button",function(event){
        editBookFromList(event.currentTarget.parentElement);
    });
}

function createRemoveButton() {
    return createButton("remove-button", function (event) {
        removeBookFromList(event.currentTarget.parentElement.parentElement.parentElement);
    });
}

function editBuku(judul, penulis, tahun, status, statusString, rate){
    removeBookFromList(el);
    addBuku(judul, penulis, tahun, status, statusString, rate);
}

function addBuku(judul, penulis, tahun, status, statusString, rate) {
    const buku = makeBuku(judul, penulis, tahun, statusString, rate);
    const bukuObject = composeBukuObject(judul, penulis, tahun, status, rate);

    bukubuku.push(bukuObject);
    buku[BOOK_ITEM_ID] = bukuObject.id;

    if (status == 0) uncompletedBookList.append(buku);
    else if (status == 1) completedBookList.append(buku);
    else plannedBookList.append(buku);
}

function makeBuku(judul, penulis, tahun, status, rate) {
    const titleText = document.createElement("span");
    titleText.innerText = judul

    const rating = document.createElement("span");
    rating.innerText = "(" + rate + ") ";

    const title = document.createElement("h4");
    title.append(rating);
    title.append(titleText);

    const author = document.createElement("p");
    author.innerText = penulis;

    const year = document.createElement("p");
    year.innerText = tahun;

    const statusBuku = document.createElement("p");
    statusBuku.innerText = status;

    const textContainer = document.createElement("div");
    textContainer.append(title, author, year, statusBuku);
    textContainer.classList.add("text-on-book-container");

    const misc = document.createElement("div");
    const buttons = document.createElement("div");
    buttons.style.setProperty("display","flex");
    buttons.style.setProperty("flex-direction","row");
    buttons.style.setProperty("flex","1");
    buttons.style.setProperty("align-items","flex-end");

    misc.append(createStar(rate));
    misc.append(buttons)

    buttons.append(createEditButton());
    buttons.append(createRemoveButton());
    misc.classList.add("misc-on-book-container")

    const container = document.createElement("div");
    container.append(textContainer);
    container.append(misc);
    container.classList.add("book-container");

    return container;
}