function maxOfTwo(x, y) {
    let max;

    if(y > x) {
        max = y;
    } else {
        max = x;
    }
    return max;
}

console.log(maxOfTwo(15,10));