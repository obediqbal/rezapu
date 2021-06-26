const submitForm = document.getElementById("newBook");
const judulBuku = document.getElementById("judul");
const penulisBuku = document.getElementById("penulis");
const tahunBuku = document.getElementById("tahun");
const sedangStatus = document.getElementById("sedang");
const selesaiStatus = document.getElementById("selesai");
const akanStatus = document.getElementById("akan");
const ratingBuku = document.getElementById("rating");
const messageSubmit = document.getElementById("messageSubmit");

function successMessage(){
    messageSubmit.innerHTML="";
    let judulQuote=document.createElement("span");
    judulQuote.style.fontStyle="italic";
    judulQuote.style.fontWeight="bold";
    judulQuote.innerText = judulBuku.value;
    messageSubmit.append(judulQuote);
    messageSubmit.append(" telah berhasil ditambahkan")
}

submitForm.addEventListener("submit",function(event){
    event.preventDefault();
    successMessage();
    submitForm.reset();
});
