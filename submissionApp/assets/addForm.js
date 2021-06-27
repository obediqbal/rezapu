const submitForm = document.getElementById("newBook");
const judulBuku = document.getElementById("judul");
const penulisBuku = document.getElementById("penulis");
const tahunBuku = document.getElementById("tahun");
const sedangStatus = document.getElementById("sedang");
const selesaiStatus = document.getElementById("selesai");
const akanStatus = document.getElementById("akan");
const ratingBuku = document.getElementById("rating");
const messageSubmit = document.getElementById("messageSubmit");
const preview = document.getElementById("previewAdd")

function showSuccessMessage() {
    messageSubmit.innerHTML = "";

    let judulQuote = document.createElement("span");
    judulQuote.style.fontStyle = "italic";
    judulQuote.style.fontWeight = "bold";
    judulQuote.innerText = judulBuku.value;

    messageSubmit.append(judulQuote);
    messageSubmit.append(" telah berhasil ditambahkan")
}

function statusToInt() {
    if(sedangStatus.checked) return 0;
    else if(selesaiStatus.checked) return 1;
    else return 2;
}

submitForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const buku = composeBukuObject(judulBuku.value, penulisBuku.value, tahunBuku.value, statusToInt(), ratingBuku.value)
    bukubuku.push(buku);
    console.log(bukubuku);

    showSuccessMessage();
    submitForm.reset();
});

for(let i=0;i<3;i++){
    let target = submitForm.children[i].children[2];
    let toChange = preview.children[i].children[0];
    target.addEventListener("input",function(){
        toChange.innerText = target.value;

        if(target.value=="" || target==tahunBuku && (parseInt(target.value)>target.max || parseInt(target.value)<target.min)) {
            toChange.innerText = "-";
        }
    });

    let target2 = submitForm.children[3];
    target2.children[i*2].addEventListener("input",function(){
        preview.children[3].children[0].innerText = target2.children[(i*2)+1].innerText;
    });
}

ratingBuku.addEventListener("input",function(){
    let target = document.getElementById("ratePrev").children[0];
    target.innerText = ratingBuku.value;
});
