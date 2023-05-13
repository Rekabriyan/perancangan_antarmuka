var set = localStorage.getItem("display");
var jumlah = localStorage.getItem("jumlah");
var logo = localStorage.getItem("logo");
document.getElementById('Opt').style.display = set;
document.getElementById("opt-rp").textContent = "Rp " + jumlah;

if (logo == "transfer"){
    document.getElementById('opt-lg').src = "img/" + logo + ".png"; 
    document.getElementById('opt').textContent = "Ucup";
} else if (logo == "pdam"){
    document.getElementById('opt-lg').src = "img/" + logo + ".png";
    document.getElementById('opt').textContent = "Air";
} else {
    document.getElementById('opt-lg').src = "img/" + logo + ".png";
    document.getElementById('opt').textContent = "Listrik";
}

function tambahTransaksi() {
    location.href='fadhil2.html'
}

function editTransaksi() {
    window.location.href='fadhil3.html'
}