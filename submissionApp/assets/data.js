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