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
console.log(nthRootOfNumber(69, 4));

//Using Linear Search

//Power exponential method
function powerExponentialMethod(b, exp) {
    //b = base number like 2
    //exp = exponent number like 5
    //ans = 2^5 =
    let ans = 1;
    let base = b;
    while (exp > 0) {
        if (exp % 2) {
            exp--;
            ans = ans * base;
        }
        else {
            exp /= 2;
            base = base * base;
        }
    }
    return ans;
}

function NthRoot(root, number) {
    // Use linear search on the answer space:
    for (let i = 1; i <= number; i++) {
        //val = Math.pow(i , root)
        let val = powerExponentialMethod(i, root);
        if (val === number) return i;
        else if (val > number) break;
    }
    return -1;
}

console.log(NthRoot(3 , 27));
console.log(NthRoot(4, 69));