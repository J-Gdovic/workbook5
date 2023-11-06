"use strict";
const googleButton = document.getElementById("googleButton");
const w3ScoolsButton = document.getElementById("w3ScoolsButton");
const imagesButton = document.getElementById("imagesButton");

function openGoogle() {
  window.open("https://www.google.com/");
}
googleButton.onclick = openGoogle;

function openW3Schools() {
  window.open("https://www.w3schools.com/js/default.asp");
}
w3ScoolsButton.onclick = openW3Schools;

function openImages() {
  window.open("images.html");
}
imagesButton.onclick = openImages;
