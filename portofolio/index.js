
// Membuat scrollSmoth
var posY = 0;
var jarak = 20;


function scrollSmoth(id) {
    
    var target = document.getElementById(id).offsetTop; 

    var scrollAnimate = setTimeout(function(){
        scrollSmoth(id)
    }, 5)

    posY = posY + jarak;
    if(posY >= target) {
        clearTimeout(scrollAnimate);
        posY = 0;
    }
    else {
    // Window.scroll terdapat dua parameter yaitu x dan y horizontal dan vertikal
    window.scroll(0, posY);
    }
    
    return false;
}

// ========== Validasi ==========
var MyForm = document.getElementById('form');
var nameInput = document.getElementById('nama');
var emailInput = document.getElementById('email');
var pesanInput = document.getElementById('pesan');
var errorName = document.getElementById('errorP');
var ulang = document.getElementById('reset');

function proses(e) {
// ========== Validasi Username ==========
    
    if( nameInput.value.trim() === "" ) {
        errorP[0].innerHTML = "Nama harus diisi";
    }else if( /\W/.test(nameInput.value.trim()) ) {
        errorP[0].innerHTML = "Hanya bisa diisi karakter Alfanumerik";
    }else if( nameInput.value.trim().length < 5 ) {
        errorP[0].innerHTML = "Nama harus lebih dari 5 karakter";
    }else {
        errorP[0].innerHTML = "";
        console.log("Data berhasil");
    }
    e.preventDefault();

// ========== Validasi Email ==========

    if( emailInput.value === "" ) {
        errorP[1].innerHTML = "Email harus diisi";
    }else {
        errorP[1].innerHTML = "";
        console.log("Data berhasil");
    }
    e.preventDefault();

// ========== Validasi comment ==========

    if( pesanInput.value === "" ) {
        errorP[2].innerHTML = "Pesan harus diisi";
    }else if( pesanInput.value.length <= 5 ) {
        errorP[2].innerHTML = "Pesan minimal 5 karakter";
    }else {
        errorP[2].innerHTML = "";
        console.log("Data berhasil");
    }
    e.preventDefault();
}

MyForm.addEventListener('submit', proses );