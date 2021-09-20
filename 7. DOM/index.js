/**
 * Document Object Modal
 * 
 * Html document is structured as a Javascript Object. These HTML element has different properties.
 * 
 * We can able to get, create, append or remove the HTML element using Javascipt.
 * 
 * Selecting a HTML element is similar to selecting using CSS.
 * 
 */


// Getting Element

// 1. getElementsByTagName()   ->  it retuns an HTMLCollection Object.

console.log(document.getElementsByTagName('h1'))

const allH1Tags = document.getElementsByTagName('h1');

for (let index = 0; index < allH1Tags.length; index++) {
    const element = allH1Tags[index];
    console.log(element.innerText)

    element.classList.add('new-class');
    // element.classList.remove('title');

    // classname
    // element.className = 'new-class';
    
}

// 2. getElementsByClassName() -> it returns HTMLCollection Object.

console.log('****** GetElementByClassName ******')

const allClassElement = document.getElementsByClassName('title');

for (let index = 0; index < allClassElement.length; index++) {
    const element = allClassElement[index];
    
    element.style.color = 'red';
    element.style.fontSize = '26px';  // css: font-size: 12px;
}


// 3. getElementById()  -> it return a single HTML element.

console.log('****** getElementById ******')

const firstTitleEl = document.getElementById('first-title');

firstTitleEl.style.fontSize = '36px';
firstTitleEl.style.color = 'green';


// 4. querySelector() -> we can select element by using tag name or class name or id. it return only one single element

console.log('****** querySelector ******')

document.querySelector('h1').style.backgroundColor = "cornflowerblue";
document.querySelector('h1').style.color = "#fff";
document.querySelector('h1').style.padding = "20px";


// 5. querySelectorAll() -> select element by using tag name or class name or id, it return a node list like an array which support array methods

console.log('****** querySelectorAll ******')

const titleArray = document.querySelectorAll('.title');

titleArray.forEach( (element, index) => {
    // get the current element innerText
    const innerText = element.innerText;

    // set the currnt innerText to title attribute.
    element.setAttribute('title', innerText);
    element.setAttribute('data-value', index);
});

console.log('****** getAttribute ******')

// getAttribute()
titleArray.forEach(element => {
    console.log(element.getAttribute('data-value'))
})