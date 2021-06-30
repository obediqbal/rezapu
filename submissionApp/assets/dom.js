const submitForm = document.getElementById("newBook");
const judulBuku = document.getElementById("judul");
const penulisBuku = document.getElementById("penulis");
const tahunBuku = document.getElementById("tahun");
const sedangStatus = document.getElementById("sedang");
const selesaiStatus = document.getElementById("selesai");
const akanStatus = document.getElementById("akan");
const radioBuku = submitForm.children[3];
const ratingBuku = document.getElementById("rating");
const messageSubmit = document.getElementById("messageSubmit");
const preview = document.getElementById("previewAdd")
const heading = document.getElementById("addPanel").children[0];

const ADD_BOOK_HEADING = "Tambahkan Buku";
const EDIT_BOOK_HEADING = "Sunting Buku";

const uncompletedBookList = document.getElementById("uncompleted-list");
const completedBookList = document.getElementById("completed-list");
const plannedBookList = document.getElementById("planned-list");
const BOOK_ITEM_ID = "bookId"

function modeToAdd() {
    heading.innerText = ADD_BOOK_HEADING;
    submitForm.reset();
}

function modeToEdit(judul, penulis, tahun, status, rate) {
    heading.innerText = EDIT_BOOK_HEADING;
    judulBuku.value = judul;
    penulisBuku.value = penulis;
    tahunBuku.value = tahun;
    radioBuku.children[status * 2].checked = true;
    ratingBuku.value = rate;
}

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
    const buku = findBuku(element[BOOK_ITEM_ID]);

}

function createEditButton() {

}

function createRemoveButton() {
    return createButton("remove-button", function (event) {
        removeBookFromList(event.currentTarget.parentElement);
    });
}

function resetPreview() {
    let i =0;
    while(i<5){
        preview.children[i].children[0].innerText="-";
        i++;
    }
    preview.children[3].children[0].innerText = "Sedang Dibaca";
}

function addBuku(judul, penulis, tahun, status, statusString, rate) {
    const buku = makeBuku(judul, penulis, tahun, statusString, rate);
    const bukuObject = composeBukuObject(judul, penulis, tahun, statusString, rate);

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