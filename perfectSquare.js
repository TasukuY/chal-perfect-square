
let perfectSquare = num => {
    let testSqrt = Math.sqrt(num);
    if(Number.isInteger(testSqrt)){
        return Math.pow(testSqrt+1, 2);
    }else{
        return -1;
    }
}

let perfectSquare2 = num => ((Number.isInteger(Math.sqrt(num))) ? Math.pow(Math.sqrt(num) + 1, 2) : -1);

// console.log(perfectSquare(3000));
console.log(perfectSquare2(3000));