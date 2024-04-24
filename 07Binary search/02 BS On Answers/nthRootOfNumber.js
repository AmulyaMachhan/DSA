function toFindWhereTheNumberExists(number, mid, power) {
    let ans = Math.pow(mid, power);
    if (ans > number) return 2;
    if (ans === number) return 1;
    return 0;
}

function nthRootOfNumber(number, root) {
    let low = 1, high = number;
    let val = 0;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        val = toFindWhereTheNumberExists(number, mid, root);
        if (val === 1) return mid;
        else if (val === 0) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

console.log(nthRootOfNumber(27, 3)); 
console.log(nthRootOfNumber(69, 4))