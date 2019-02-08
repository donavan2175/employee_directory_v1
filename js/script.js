
const url = 'https://randomuser.me/api/';

let userImage = document.getElementById('userImage');
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let city = document.getElementById('city');


var modal = document.querySelector(".modal");
var modal2 = document.querySelector(".modal-2");
var modal3 = document.querySelector(".modal-3");
var modal4 = document.querySelector(".modal-4");
var modal5 = document.querySelector(".modal-5");
var modal6 = document.querySelector(".modal-6");
var modal7 = document.querySelector(".modal-7");
var modal8 = document.querySelector(".modal-8");
var modal9 = document.querySelector(".modal-9");
var modal10 = document.querySelector(".modal-10");
var modal11 = document.querySelector(".modal-11");
var modal12 = document.querySelector(".modal-12");


var border = document.querySelector(".border");
var border2 = document.querySelector(".border-2");
var border3 = document.querySelector(".border-3");
var border4 = document.querySelector(".border-4");
var border5 = document.querySelector(".border-5");
var border6 = document.querySelector(".border-6");
var border7 = document.querySelector(".border-7");
var border8 = document.querySelector(".border-8");
var border9 = document.querySelector(".border-9");
var border10 = document.querySelector(".border-10");
var border11 = document.querySelector(".border-11");
var border12 = document.querySelector(".border-12");
var closeButton = document.querySelector(".close-button");

function judy() {
    modal.classList.toggle("show-modal");
}

function alvin() {
    modal2.classList.toggle("show-modal");
}

function jessie() {
    modal3.classList.toggle("show-modal");
}

function josh() {
    modal4.classList.toggle("show-modal");
}

function amy() {
    modal5.classList.toggle("show-modal");
}

function james() {
    modal6.classList.toggle("show-modal");
}

function ashtyn() {
    modal7.classList.toggle("show-modal");
}

function john() {
    modal8.classList.toggle("show-modal");
}

function may() {
    modal9.classList.toggle("show-modal");
}

function jose() {
    modal10.classList.toggle("show-modal");
}

function ashley() {
    modal11.classList.toggle("show-modal");
}

function chris() {
    modal12.classList.toggle("show-modal");
}


function windowOnClick(event) {
    if (event.target === modal) {
        show();
    }
}

border.addEventListener("click", judy);
border2.addEventListener("click", alvin);
border3.addEventListener("click", jessie);
border4.addEventListener("click", josh);
border5.addEventListener("click", amy);
border6.addEventListener("click", james);
border7.addEventListener("click", ashtyn);
border8.addEventListener("click", john);
border9.addEventListener("click", may);
border10.addEventListener("click", jose);
border11.addEventListener("click", ashley);
border12.addEventListener("click", chris);
close-button.addEventListener("click", show);
window.addEventListener("click", windowOnClick);