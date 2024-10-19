// your JavaScript file
const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red";
paragraph.style.color = "red";

document.querySelector(".content").appendChild(paragraph);

// Blue Text

const blueHeader = document.createElement("h3");
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "blue";
document.querySelector(".content").appendChild(blueHeader);

// Div 3

const complexDiv = document.createElement("div");
complexDiv.style.borderColor = "black";
complexDiv.style.borderWidth = 2;
complexDiv.style.backgroundColor = "pink";
const newParagraph = document.createElement("p");
newParagraph.textContent = "ME TOO!";
const newH1 = document.createElement("h1");
newH1.textContent = "I'm in a div";
complexDiv.appendChild(newH1);
complexDiv.appendChild(newParagraph);
container.appendChild(complexDiv);

// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    console.log(e);
  });
  
