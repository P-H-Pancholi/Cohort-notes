function square(n) {
    return n*n;
}

function sumOfSomething(a, b, fn){
    let val1 = fn(a);
    let val2 = fn(b);

    return val1+val2;
}