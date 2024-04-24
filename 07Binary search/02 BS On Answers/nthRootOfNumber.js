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
function func(b, exp) {
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

function NthRoot(n, m) {
    // Use linear search on the answer space:
    for (let i = 1; i <= m; i++) {
        let val = func(i, n);
        if (val === m) return i;
        else if (val > m) break;
    }
    return -1;
}

console.log(NthRoot(27));