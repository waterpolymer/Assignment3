// 1) Select the section with an id of container without using querySelector.
let container = document.getElementById("container");

// 2) Select the section with an id of container using querySelector.
let container2 = document.querySelector("#container");
console.log(container2);

// 3) Select all of the list items with a class of "second".
let second = document.querySelector("li.second");
console.log(second);

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
let third = container.lastElementChild.querySelector("li.third");
console.log(third);

// 5) Give the section with an id of container the text "Hello!".
let helloText = document.createTextNode("Hello");
container.appendChild(helloText);

// 6) Add the class main to the div with a class of footer.
let footer = document.querySelector("div.footer");
console.log(footer);
footer.classList.add("main");

// 7) Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// 8) Create a new li element.
let newLi = document.createElement("li");

// 9) Give the li the text "four".
let text = document.createTextNode("four");
newLi.appendChild(text);

// 10) Append the li to the ul element.
let ol = container.firstElementChild
ol.appendChild(newLi);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
for(let i = 0; i < ol.children.length; i++){
    //console.log(child);
    ol.children[i].style.backgroundColor = "green";
}


// 13) Remove the div with a class of footer.
footer.remove;