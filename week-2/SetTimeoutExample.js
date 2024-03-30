console.log("Hi");   // ----------------> 1

setTimeout( () => {
    console.log("Click the button") // ------------------> 3
}, 2000);

console.log("Outside set timeout") //-----------------> 2
// 1 will print first then 2 & after 2 seconds 3 will be printed as setTimeout is an async function