let a = 1;
console.log(a);


let fs = require("fs");
fs.readFile("README.md","utf-8", (err, data) => {
    console.log("Reading file notes.txt");
    //console.log(err);
    console.log(data);   // prints last
})

let ans = 0;
for(let i = 0; i < 100; i++) {
    ans = ans + i;
}
console.log(ans);   //prints before line 9 as readFile is async function