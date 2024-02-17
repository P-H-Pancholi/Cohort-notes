function findSum(a,b,funcToBe) {
    let result = a+b;
    funcToBe(result)
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayPassiveResult(data) {
    console.log("Sum's result is : " + data);
}

const ans = findSum(1,2, displayResult)