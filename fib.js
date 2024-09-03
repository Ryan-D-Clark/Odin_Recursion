function fibs(amount){

    let fibArray = [0, 1]
    let prev = 0
    let current = 1
    for(let i = 2; i < amount; i++){
        let value = prev + current
        fibArray.push(value)
        prev = current
        current = value
    }
    return fibArray
}




function fibsRec(n) {
    if (n < 2) {
        return [1];   
    }
    if (n < 3) {
        return [1, 1];
    }

    let a = fibsRec(n - 1);
    a.push(a[n - 2] + a[n - 3]);
    return a
};

console.log(fibs(8))
console.log(fibsRec(8))