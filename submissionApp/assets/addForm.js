function showAddMessage() {
    messageSubmit.innerHTML = "";

    let judulQuote = document.createElement("span");
    judulQuote.style.fontStyle = "italic";
    judulQuote.style.fontWeight = "bold";
    judulQuote.innerText = judulBuku.value;

    messageSubmit.append(judulQuote);
    messageSubmit.append(" telah berhasil ditambahkan")
}

function statusToInt() {
    if (sedangStatus.checked) return 0;
    else if (selesaiStatus.checked) return 1;
    else return 2;
}

function statusToString() {
    const sint = statusToInt();
    if(sint==0) return "Sedang Dibaca";
    else if(sint==1) return "Selesai Dibaca";
    else return "Akan Dibaca";
}

submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const judul = judulBuku.value;
    const penulis = penulisBuku.value;
    const tahun = tahunBuku.value;
    const statusString = statusToString();
    const status = statusToInt();
    const rate = ratingBuku.value;

    if(heading.innerText==ADD_BOOK_HEADING) addBuku(judul,penulis,tahun,status,statusString,rate);
    else editBuku(judul,penulis,tahun,status,statusString,rate);

    showAddMessage();
    submitForm.reset();
    resetPreview();
});

for (let i = 0; i < 3; i++) {
    let target = submitForm.children[i].children[2];
    let toChange = preview.children[i].children[0];
    target.addEventListener("input", function () {
        toChange.innerText = target.value;

        if (target.value == "" || target == tahunBuku && (parseInt(target.value) > target.max || parseInt(target.value) < target.min)) {
            toChange.innerText = "-";
        }
    });

    let target2 = submitForm.children[3];
    target2.children[i * 2].addEventListener("input", function () {
        preview.children[3].children[0].innerText = statusToString(i);
    });
}

ratingBuku.addEventListener("input", function () {
    let target = document.getElementById("ratePrev").children[0];
    target.innerText = ratingBuku.value;
});