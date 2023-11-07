"use strict";

let imageFiles = [
  {id:"1", path: "https://placehold.co/300x300", description: "placeholder 1" },
  {id:"2", path: "https://placehold.co/300x300", description: "placeholder 2" },
  {id:"3", path: "https://placehold.co/300x300", description: "placeholder 3" },
  {id:"4", path: "https://placehold.co/300x300", description: "placeholder 4" },
  {id:"5", path: "https://placehold.co/300x300", description: "placeholder 5" },
  {id:"6", path: "https://placehold.co/300x300", description: "placeholder 6" },
  {id:"7", path: "https://placehold.co/300x300", description: "placeholder 7" },
  {id:"8", path: "https://placehold.co/300x300", description: "placeholder 8" },
  {id:"9", path: "https://placehold.co/300x300", description: "placeholder 9" },
  {id:"10", path: "https://placehold.co/300x300", description: "placeholder 10" },
  {id:"11", path: "https://placehold.co/300x300", description: "placeholder 11" },
  {id:"12", path: "https://placehold.co/300x300", description: "placeholder 12" },
];
// get elements into variables
const imageList = document.querySelector("#imageList");
const addImageButton = document.querySelector("#addImageButton");
const clearImageButton = document.querySelector("#clearImageButton");
const imagesDiv = document.querySelector("#imagesDiv");


//console.log(selectImageList,addImageButton,clearImageButton,imagesDiv);
// functions

function loadImageList() {
    for (const imageFile of imageFiles) {
        // baby step console.log(imageFile);
        const option = document.createElement("option");
        option.value = imageFile.id;
        option.innerText = imageFile.description;
        imageList.appendChild(option);
    }
}

function addImage() {
  // baby step to make sure function is working in the console  console.log("working");
  

}

loadImageList();
addImageButton.onclick = addImage;