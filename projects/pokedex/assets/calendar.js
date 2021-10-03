let date = new Date();
function banyakHari(bulan){
    switch(bulan){
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            return 31;
            break;
        case 1:
            if(date.getFullYear()%4==0) return 29;
            else return 28;
            break;
        default:
            return 30;
            break;           
    }
}

//generator
let tanggalSekarang = date.getDate();
let hariSekarang = date.getDay();
let bulanSekarang = date.getMonth();
let tanggal = [];
let prev = banyakHari((bulanSekarang-1+12)%12);
let next = banyakHari(bulanSekarang);

tanggal.unshift(tanggalSekarang);

for(let i=1;i<=tanggalSekarang-1;i++){
    tanggal.unshift(tanggalSekarang-i);
}

let length=tanggal.length;
for(let i=0;i<=(hariSekarang-length+7)%7;i++){
    tanggal.unshift(prev);
    prev--;
}

length=tanggal.length;
for(let i=1;i<=42-length;i++){
    if(tanggalSekarang+i==next) tanggal.push(tanggalSekarang+i);
    else tanggal.push((tanggalSekarang+i)%next);
}

//DOM
let kalender = document.getElementById("calendar");
let k=0;
let n=banyakHari(bulanSekarang-1)-prev;

for(let i=0;i<6;i++){
    let baris = document.createElement("div");
    for(let j=0;j<7;j++){
        let p = document.createElement("p");
        if(tanggal[k]<10)p.innerText = "0" + tanggal[k];
        else p.innerText=tanggal[k];
        if(k<n || k>next+n-1) {
            p.setAttribute("class","grey");
        } else if(tanggal[k]==tanggalSekarang) p.setAttribute("class","today");
        else p.setAttribute("class","bg");

        baris.appendChild(p);
        k++;
    }
    kalender.appendChild(baris);
}
