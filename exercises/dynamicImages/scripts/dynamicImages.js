"use strict";

let imageFiles = [
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
];
// get elements into variables
const imageList = document.querySelector("#imageList");
const addImageButton = document.querySelector("#addImageButton");
const clearImageButton = document.querySelector("#clearImageButton");
const imagesDiv = document.querySelector("#imagesDiv");
const option = document.querySelectorAll("option");

//console.log(selectImageList,addImageButton,clearImageButton,imagesDiv);
// functions

function loadImageList() {
    for (const imageFile of imageFiles) {
        console.log(imageFile);
    }
}
loadImageList();