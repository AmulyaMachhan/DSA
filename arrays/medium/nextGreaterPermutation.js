function nextGreaterPermutation(A) {
    let n = A.length; 
    let ind = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (A[i] < A[i + 1]) {
            ind = i;
            break;
        }
    }

    if (ind == -1) {
        A.reverse();
        return A;
    }

    for (let i = n - 1; i > ind; i--) {
        if (A[i] > A[ind]) {
            [A[i], A[ind]] = [A[ind], A[i]];
            break;
        }
    }

    A.splice(ind + 1, n - ind - 1, ...A.slice(ind + 1).reverse());

    return A;
}

let A = [2, 1, 5, 4, 3, 0, 0];
let ans = nextGreaterPermutation(A);

console.log("The next permutation is: [" + ans.join(" ") + "]")