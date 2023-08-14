
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

