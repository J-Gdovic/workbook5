"use strict";
// get elements into variables
const decorateButton = document.querySelector("#decorateButton");
const image = document.querySelectorAll("img");
const paragraphs = document.querySelectorAll("p");

//functions
function decorate() {
    for (const paragraph of paragraphs) {
    paragraph.style.backgroundColor = "yellow";  
    }
  
}



//wire up events
decorateButton.onclick = decorate;