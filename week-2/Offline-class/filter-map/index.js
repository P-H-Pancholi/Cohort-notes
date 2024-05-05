// given an array, return new array in which every value is mult by 2
// [1,2,3,4,5]
// [2,4,6,8,10]


const input = [1,2,3,4,5]

const ans = input.map( function(i) {
    return i*2
})

console.log(ans)

//filter
// given an array, return new array which has only even values of array

const arr = [1,2,3,4,5,6]

const myArr = arr.filter(function (n) {
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
})

console.log(myArr)