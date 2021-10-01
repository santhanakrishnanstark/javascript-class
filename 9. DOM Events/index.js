// DOM EVENTS

// Event Listeners 

/**
 * Common Event Listeners: 
 * 
 * 1. click         -> when the element is clicked
 * 2. dblclick       -> when the element is double clicked
 * 3. mouseenter    -> when the mouse pointer enter to the element
 * 4. mouseleave    -> when the mouse pointer leaves the element
 * 5. mousemove     -> when the mouse pointer move on the element
 * 6. mouseover     -> when the mouse pointer move on the element
 * 7. mouseout      -> when the mouse pointer is out from the element 
 * 8. input         -> when the value is entered to input field
 * 9. change        -> when the value is changed on input field
 * 10. focus/blur   -> when the element is focused / not focused
 * 11. keydown      -> when the key is down
 * 12. keyup        -> when the key is up
 * 13. keypress     -> when we press any key (deprecated)
 * 14. onload       -> when the browser has finished loading a page.
 * 
 * 
 * 
 * Listeners created using : addEventListener()
 */

// A javascript function is trigger when we call it.
// EventLiseners are called when an particular event occurs.


// 1. binding click event to square

let squareEl = document.querySelector('.square');

squareEl.addEventListener('click', function (event) {
    let currentColor = event.target.style.backgroundColor;
    console.log(event.target.style)
    if(currentColor === 'rgb(170, 170, 170)') {
        event.target.style.backgroundColor = '#eee';
    }else {
        event.target.style.backgroundColor = '#aaa';
    }
    
});

// DBClick event

squareEl.addEventListener('dblclick', function (event) {
    console.log('DBL Clicked')
    event.target.style.display = 'none';
})

squareEl.addEventListener('mouseenter', function (event) {
    console.log('mouse enter in to element')
    event.target.style.boxShadow = '0px 2px 10px #959595';
})  


squareEl.addEventListener('mouseleave', function (event) {
    console.log('mouse leave from an element')
    event.target.style.boxShadow = 'none';

    // set default color to remove the random color from mousemove event.
    event.target.style.backgroundColor = '#eee';
})

squareEl.addEventListener('mousemove', function (event) {
    console.log('mouse moving into an element')

    // store random colors into an array.

    const colorArray = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#30336b', '#130f40']

    // get random color.
    const randomNumber = Math.floor(Math.random() * 10);

    // get the random color and apply into the square element.

    const randomColor = colorArray[randomNumber];

    event.target.style.backgroundColor = randomColor;
})  


squareEl.addEventListener('mouseover', function (event) {
    console.log('mouse over in to element')
})  


squareEl.addEventListener('mouseout', function (event) {
    console.log('mouse out from an element')
})  


// add Input event to an input filed

document.querySelector('#name').addEventListener('input', function (event) {
    let currentValue = event.target.value;

    document.querySelector('#previewText').textContent = currentValue;
});

// Change event

document.querySelector('#degree').addEventListener('change', function (event) {
    console.log('Selected Degree: ', event.target.value)
});

// focus & blur event

let inputEl = document.querySelector('#name');

inputEl.addEventListener('focus', highlightInput);
inputEl.addEventListener('blur', removeHighlight);


function highlightInput(event) {
    event.target.classList.add('focus-in');
}

function removeHighlight(event) {
    event.target.classList.remove('focus-in');
}

// key events

inputEl.addEventListener('keydown', function (event) {
    // console.log(event.target.value)
})

inputEl.addEventListener('keyup', function (event) {
    // console.log(event.target.value)
})

inputEl.addEventListener('keypress', function (event) {
    console.log(event.target.value)
})


window.addEventListener('load', function (event) {
    console.log(event)
})