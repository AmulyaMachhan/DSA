function nextGreaterPermutation(array) {
    let n = array.length; 
    let index = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (array[i] < array[i + 1]) {
            index = i;
            break;
        }
    }

    if (index == -1) {
        array.reverse();
        return array;
    }

    for (let i = n - 1; i > index; i--) {
        if (array[i] > array[index]) {
            [array[i], array[index]] = [array[index], array[i]];
            break;
        }
    }

    array.splice(index + 1, n - index - 1, ...array.slice(index + 1).reverse());

    return array;
}

let array = [2, 1, 5, 4, 3, 0, 0];
let ans = nextGreaterPermutation(array);

console.log("The next permutation is: [" + ans.join(" ") + "]")