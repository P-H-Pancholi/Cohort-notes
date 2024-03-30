
// need to pass the callback function in argument
// Just a wrapper to async functions
// func to promisify
function myOwnAsyncfunc(callback, duration) {
    setTimeout(callback, duration);
}

// no need to pass the callback function in argument
// use then on promise object to specify function to be called.
function promisifiedFunc(duration) {
    let p = new Promise( function(resolve) {
        setTimeout(resolve, duration);
    })
    return p;
}

let ans = promisifiedFunc(1000);
// ans is promise pending, use then to complete promise
ans.then( function () {
    console.log("func promisified !!")
})
myOwnAsyncfunc( function () {
    console.log("My own async function")
}, 1000);

console.log("Outside async")