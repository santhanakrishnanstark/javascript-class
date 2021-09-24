// DOM EVENTS

// Event Listeners 

/**
 * Common Event Listeners: onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload
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
    
    if(currentColor === 'rgb(170, 170, 170)') {
        event.target.style.backgroundColor = '#eee';
    }else {
        event.target.style.backgroundColor = '#aaa';
    }
    
});