
let perfectSquare = num => {
    let testSqrt = Math.sqrt(num);
    if(Number.isInteger(testSqrt)){
        return Math.pow(testSqrt+1, 2);
    }else{
        return -1;
    }
}

console.log(perfectSquare(3000));