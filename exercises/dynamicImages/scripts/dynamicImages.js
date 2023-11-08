"use strict";

let imageFiles = [
  { id: "1", path: "images/acid-rap-artwork-2.webp", description: "AcidRap" },
  { id: "2", path: "images/R-13036074-1668509366-9222.jpg", description: "Days Before Rodeo" },
  { id: "3", path: "images/AtLongLastASAPCover.jpg", description: "At Long Last A.S.A.P" },
  { id: "4", path: "images/nothingWasTheSame.jpg", description: "Nothing Was The Same" },
  { id: "5", path: "images/HNDRXX_cover.jpg", description: "HNDRXX" },
  { id: "6", path: "images/Ready_To_Die.jpg", description: "Ready To Die" },
  { id: "7", path: "images/graduation.jpg", description: "Graduation" },
  { id: "8", path: "images/Kid-cudi-indicud-cover.jpg", description: "Indicud" },
  { id: "9", path: "images/R-439652-1300194970.jpg", description: "The Great Adventures of Slick Rick" },
  { id: "10", path: "images/beastieBoys.jpg", description: "License to Ill" },
  { id: "11", path: "images/goodKID.jpg", description: "Good Kid, m.A.A.d city" },
  { id: "12", path: "images/Magna_Carta_Holy_Grail_cover.png", description: "Magna Carta...Holy Grail" },
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
  const imageFileId = imageList.value;
  // baby step to make sure imageList.value is defined - console.log(imageFileId);
  for (const imageFile of imageFiles) {
    // baby step to see the imageFile loop through console.log(imageFile);
    if (imageFile.id == imageFileId) {
      // baby step to show imageFile.id in the console - console.log(imageFile);
      //create image element
      const image = document.createElement("img");
      // set src attribute on image to imageFiles path
      image.src = imageFile.path;
      //set the alt on the image to the imageFiles description
      image.alt = imageFile.description;
      //add image to div
      imagesDiv.appendChild(image);
    }
  }
}

function clearImages() {
  imagesDiv.innerHTML = " ";
}

loadImageList();
addImageButton.onclick = addImage;
clearImageButton.onclick = clearImages;
