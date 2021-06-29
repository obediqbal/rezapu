const uncompletedBookList = document.getElementById("uncompleted-list");
const completedBookList = document.getElementById("completed-list");
const plannedBookList = document.getElementById("planned-list");
const BOOK_ITEM_ID = "bookId"

function createButton(){

}

function createEditButton(){

}

function createRemoveButton(){

}

function makeBuku(judul,penulis,tahun,status,rate){
    const titleText = document.createElement("span");
    titleText.innerText = judul

    const rating = document.createElement("span");
    rating.innerText = "("+rate+") ";

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
