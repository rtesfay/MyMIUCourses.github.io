function max(x, y) {
    let max;

    if(y > x) {
        max = y;
    } else {
        max = x;
    }
    return max;
}

console.log(max(5,10));