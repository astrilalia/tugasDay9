function fak(n){
    if (n===0){
        return 1;
    }
    return n * fak(n-1);
}
console.log(fak(8));