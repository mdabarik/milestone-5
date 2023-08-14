
const h1 = document.getElementById('parent-one');
// h1.style.color = 'red';
// h1.style.fontSize = '50px';

h1.innerText = "changed text";
h1.textContent = "alalslaslalsl";

h1.innerHTML = '<h1>Heading DOM Manipulation</h1>';

const alltags = document.getElementsByClassName('item');
// console.log(alltags);
/*
for (let item of alltags) {
    // console.log(item);
    item.style.color = 'aqua';
    item.style.backgroundColor = 'black';
}
*/
/*
const myTags = document.getElementsByTagName("h1");
// console.log(myTags);

for (let i = 0; i < myTags.length; i++) {
    // console.log(myTags[i]);
    let element = myTags[i];
    element.style.color = "blue";
}
*/
/*
const parent = document.querySelector("#parent-one");
console.log(parent);

const li = document.querySelector(".item");
console.log(li);

const allLi = document.querySelectorAll(".item");
console.log(allLi);

for (let item of allLi) {
    console.log(item);
    item.style.backgroundColor = "blue";
    item.style.color = 'white';
}

// elementNode, textNode */


// const parent = document.querySelector(".grandparent");
// const children = document.children;

// const gp = document.querySelector('.grandparent');
// const child = gp.querySelectorAll(".item");
// console.log(child);

// const child = document.querySelector(".item");
// const parent = child.parentElement;
// const gparent = parent.parentElement
// const ggparent = gparent.parentElement;
// console.log(ggparent);

// child to grand parent
// const child = document.querySelector(".item");
// const gp = child.closest(".grandparent");
// console.log(gp);

// sibling relationship
// const parent1 = document.getElementById("parent-one");
// const parent2 = parent1.nextElementSibling;
// console.log(parent2);

// const chacha = document.getElementById("parent-one").nextElementSibling;
// console.log(chacha);

// const chacha = document.getElementById("parent-two");
// const babba = chacha.previousElementSibling;
// console.log(babba);

const h3 = document.createElement("h3");
h3.innerText = "This is heading 3 created using createElement";

const container = document.querySelector(".grandparent");
container.appendChild(h3);

const div = document.createElement("div");
div.innerHTML = `
<h1> H1 </h1>
<h2> h2 </h2>
`;

// adding class
div.classList.add("new-class-name");
div.setAttribute("id", "new-id");
div.setAttribute("title", "new title");
div.removeAttribute("title");


// remove child
container.insertBefore(div, document.getElementById("parent-two"));
