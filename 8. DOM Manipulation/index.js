// DOM Manipulation

/**
 * 1. Creating an Element (HTML Node)
 * 2. Creating an Elements
 * 3. Appending a child element to a parent element
 * 4. Removing a child element from a parent node or element
 */


// 1. Creating an Element   -> creating using tag name
// Syntax: document.createElement('tagname')

let title = document.createElement('h2');
title.style.color = 'green';
title.classList.add('sub-title');
title.textContent = 'Creating an Element';


console.log(title)


// 2. Creating an Elements 

let numDiv;
let noOfDivs = 50;

for (let index = 0; index < noOfDivs; index++) {
    numDiv = document.createElement('div');
    numDiv.textContent = index+1;
    if((index+1) % 2 === 0) {
        numDiv.classList.add('even');
    }

    // append number div into table div

    let tableDiv = document.querySelector('.table');
    tableDiv.appendChild(numDiv);
}

// 3. Appending a child div to parent element.
// appendChild()

let body = document.querySelector('body');

body.appendChild(title);

// 4. Removing a child from parent element.

let subTitleDiv = document.querySelector('.sub-title');
body.removeChild(subTitleDiv);