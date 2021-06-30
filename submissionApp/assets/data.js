let bukubuku = []

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
    for (buku in bukubuku){
        if(buku.id=bookId) return index;
        index++;
    }
    return -1;
}
function findBuku(bookId){
    const index = findBukuIndex(bookId)
    if (index!=-1) return bukubuku[index]
    return null;
}
