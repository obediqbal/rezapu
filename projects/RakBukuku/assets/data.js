const STORAGE_KEY = "BOOKSHELF_STORAGE"

let bukubuku = []

function isStorageExist(){
    if(typeof(Storage)!=undefined) return true;
    alert("Browser kamu tidak mendukung Web Storage");
    return false;
}

function refreshData(){
    for (buku of bukubuku){
        const newBuku = makeBuku(buku.title,buku.author,buku.year,buku.rating);
        newBuku[BOOK_ITEM_ID] = buku.id;

        if(buku.status==0) uncompletedBookList.append(newBuku);
        else if (buku.status==1) completedBookList.append(newBuku);
        else if (buku.status==2) plannedBookList.append(newBuku);
    }
}

function saveData(){
    const parsed = JSON.stringify(bukubuku);
    localStorage.setItem(STORAGE_KEY,parsed);
}

function loadData(){
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(data!=null) bukubuku = data;
    refreshData();
}

function updateDataToStorage(){
    if(isStorageExist()) saveData();
}

function composeBukuObject(title, author, year, status, rating){
    return {
        id: +new Date(),
        title: title,
        author: author,
        year: year,
        status: status,
        rating: rating
    }
}

function findBukuIndex(bookId){
    index=0;
    for (buku of bukubuku){
        if(buku.id==bookId) return index;
        index++;
    }
    return -1;
}
function findBuku(bookId){
    const index = findBukuIndex(bookId)
    if (index!=-1) return bukubuku[index]
    return null;
}

