/**
 * 
 * A page should have on input field,
 * 
 * When type a random number on that field the should generate small square html box upto that 
 * particular random number.
 * 
 * ref for prime num program: https://www.programiz.com/javascript/examples/prime-number
 */


// steps

// get the input element

let inputEl = document.querySelector('#number');

// add input Event Listener

inputEl.addEventListener('input', function (event) {

    // remove previous div child element from table div
    document.querySelector('.table').innerHTML = '';
    
    // get each input value from event listener
    const number = event.target.value;

    // generate div elements based on latest input value
    for (let index = 0; index < number; index++) {
        let divEl = document.createElement('div');
        divEl.textContent = index+1;

        // find weather the current number is prime or not, if it is prime then add 'prime' class &
        // give some style for this particular div.

        // write your code.

        // append the div element to table div
        document.querySelector('.table').appendChild(divEl);
        
    }

})
