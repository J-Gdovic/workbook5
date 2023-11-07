"use strict";
// get elements into variables
const decorateButton = document.querySelector("#decorateButton");
const images = document.querySelectorAll("img");
const paragraphs = document.querySelectorAll("p");

//functions
function decorate() {
    for (const paragraph of paragraphs) {
    paragraph.style.border = "1rem dashed red"; 
    paragraph.style.backgroundColor = "green"; 
    }
    for (const image of images) {
        image.className = "roundedImg";
    }
}



//wire up events
decorateButton.onclick = decorate;