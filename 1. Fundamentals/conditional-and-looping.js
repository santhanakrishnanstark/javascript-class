// conditional & Looping

// if
// if else
// else if

// switch

let mark = 75;

// if => check if the mark is pass or fail

if(mark >= 40) {
    console.log('Mark is above 40 so, he is Pass');
}

// if else, else if

if(mark < 40) {
    console.log('Fail!')
}else if(mark < 60){
    console.log('Average Pass')
}else if(mark < 80) {
    console.log('Above Average')
}else {
    console.log('Outstanding')
}

// switch
console.log('Switch marks')
switch(true) {
    case (mark < 40):
        console.log('Fail!')
    break;
    case (mark < 60):
        console.log('Average Pass')
    break;
    case (mark < 80):
        console.log('Above Average')
    break;
    default:
        console.log('Outstanding')
    break;
}

// let month = prompt('Enter your month, like JAN, FEB...').toUpperCase();

let month = 5;
switch(month) {
    case 'JAN':
    case 'FEB':
    case 'MAR':
        console.log('You are born in btw Jan to Mar')
    break;
    case 'APR':
        console.log('APR Month')
    break;
    case 'MAY':
        console.log('MAY Month')
    break;
    case 'JUN':
        console.log('JUN Month')
    break;
    default:
        console.log('Invalid Month')
    break;
}

// Loop
// for, while

// while  -> use when we don't know how many times to run a statement

let n = 1;
while(n <= 10) {
    console.log('Inside While loop ' + n)
    n++;
}

// for -> use when we know how many time to run a statement.

for(let i = 1; i <= 10; i++) {
    console.log('Inside For Loop: '+ i)
}