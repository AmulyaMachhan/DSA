function nextGreaterPermutation(A) {
    let n = A.length; 
    let index = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (A[i] < A[i + 1]) {
            index = i;
            break;
        }
    }

    if (index == -1) {
        A.reverse();
        return A;
    }

    for (let i = n - 1; i > index; i--) {
        if (A[i] > A[index]) {
            [A[i], A[index]] = [A[index], A[i]];
            break;
        }
    }

    A.splice(index + 1, n - index - 1, ...A.slice(index + 1).reverse());

    return A;
}

let A = [2, 1, 5, 4, 3, 0, 0];
let ans = nextGreaterPermutation(A);

console.log("The next permutation is: [" + ans.join(" ") + "]")