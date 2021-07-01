const uncompletedBookList = document.getElementById("uncompleted-list");
const completedBookList = document.getElementById("completed-list");
const plannedBookList = document.getElementById("planned-list");
const BOOK_ITEM_ID = "bookId"
let el;

function createButton(buttonTypeClass, eventListener) {
    const button = document.createElement("button");
    button.classList.add(buttonTypeClass);
    button.addEventListener("click", function (event) {
        eventListener(event);
    });
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
        removeBookFromList(event.currentTarget.parentElement);
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

    const container = document.createElement("div");
    container.append(textContainer);
    container.append(createEditButton());
    container.append(createRemoveButton());

    return container;
}