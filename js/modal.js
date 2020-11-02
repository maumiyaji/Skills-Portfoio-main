const modalBlk = document.getElementById("certModal");

const fullbtn = document.getElementById("fullstackBtn");
const frontbtn = document.getElementById("frontendBtn");

const modalImg = document.getElementById("certImg");

// open Modals
fullbtn.onclick = function(){
    modalBlk.style.display = "block";
    modalImg.src = "/img/fullCert.jpg";
}
frontbtn.onclick = function(){
    modalBlk.style.display = "block";
    modalImg.src = "/img/frontCert.jpg";
}

// close Modals
var certmod = document.getElementsByClassName("closeModal")[0];
certmod.onclick = function() {
    modalBlk.style.display = "none";
}