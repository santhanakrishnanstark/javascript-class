/**
 * 
 * Promise: is a way to handle asynchronous operations. it allows handlers with an asynchronous actions.
 * by giving success value or failure reason.
 * 
 */

/**
 * 
 * new Promise((resolve, reject) => {
 *      resolve('success')
 *      reject('failure')
 * })
 * 
 */

/**
 * 
 * A promise is in one of these states:
 * 
 * 1. pending : initial state
 * 2. fulfilled: operation success
 * 3. rejected: operation failed
 * 
 */


const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let skills = ['HTMl', 'CSS', 'Javascript']
        if(skills.length) {
            resolve('promise success')
        }else {
            reject('Something went wrong!')
        }
    }, 2000);
})

doPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
});


/**
 * 1. Promise.all()
 * 2. Promise.any()
 * 
 */

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('image received from source 1')
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('image received from source 2')
    }, 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('image received from source 3')
    }, 500);
})

Promise.all([p1, p2, p3]).then(result => {
    console.log(result)
})

Promise.any([p1, p2, p3]).then(result => {
    console.log(result)
})