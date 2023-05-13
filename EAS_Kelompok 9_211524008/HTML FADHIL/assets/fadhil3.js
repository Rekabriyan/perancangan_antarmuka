var jumlah = localStorage.getItem("jumlah");
var logo = localStorage.getItem("logo");
document.getElementById('jenis-transaksi').value = logo;
document.getElementById("gambar").src = "img/" + logo + ".png";

var pilihan = document.getElementById("jenis-transaksi").value;
var jmlh_box = document.getElementById("Jumlah-box");
var text = document.getElementById("frek-pem");
if (pilihan == "transfer") {
	if (jmlh_box.style.display == "none") {
		jmlh_box.style.display = "flex";
		text.style.top = "407px";
	} 
}

function ubahGambarTeks(pilihan){
    var gambar = document.getElementById("gambar");
	var nomor = document.getElementById("nomor");
	gambar.src = "img/" + pilihan + ".png";
	if (pilihan == "transfer") {
		nomor.textContent = "No.Rekening";
	} else {
		nomor.textContent = "No.Pelanggan";
	}
}

function tampilkanJumlah(pilihan){
	var jmlh_box = document.getElementById("Jumlah-box");
	var text = document.getElementById("frek-pem");
	if (pilihan == "transfer") {
		if (jmlh_box.style.display == "none") {
			jmlh_box.style.display = "flex";
			text.style.top = "407px";
		} 
	} else {
		jmlh_box.style.display = "none";
		text.style.top = "335px";
	}
}

function ubahDanTampilkan(){
	var pilihan = document.getElementById("jenis-transaksi").value;
	ubahGambarTeks(pilihan);
	tampilkanJumlah(pilihan);
}

function tambah_Transaksi() {
	ubahOtomatis();
}

function ubahOtomatis() {
	var pilihan = document.getElementById("jenis-transaksi").value;
	var jumlah = document.getElementById("jumlah").value;
	if (pilihan == "transfer") {
		localStorage.setItem("display", "flex");
		localStorage.setItem("jumlah", jumlah);
		localStorage.setItem("logo", pilihan);
		window.location.href='fadhil1.html';
	} else {
		localStorage.setItem("display", "flex");
		localStorage.setItem("logo", pilihan);
		window.location.href='fadhil1.html';
	}
}

function hapus_Transaksi() {
	localStorage.setItem("display", "none");
	window.location.href='fadhil1.html';
}