function nextGreaterPermutation(A) {
    let n = A.length; // size of the array.

    // Step 1: Find the break point:
    let ind = -1; // break point
    for (let i = n - 2; i >= 0; i--) {
        if (A[i] < A[i + 1]) {
            // index i is the break point
            ind = i;
            break;
        }
    }

    // If break point does not exist:
    if (ind == -1) {
        // reverse the whole array:
        A.reverse();
        return A;
    }

    // Step 2: Find the next greater element
    //         and swap it with A[ind]:

    for (let i = n - 1; i > ind; i--) {
        if (A[i] > A[ind]) {
            [A[i], A[ind]] = [A[ind], A[i]]; // swap A[i] and A[ind]
            break;
        }
    }

    // Step 3: reverse the right half:
    A.splice(ind + 1, n - ind - 1, ...A.slice(ind + 1).reverse());

    return A;
}

let A = [2, 1, 5, 4, 3, 0, 0];
let ans = nextGreaterPermutation(A);

console.log("The next permutation is: [" + ans.join(" ") + "]");