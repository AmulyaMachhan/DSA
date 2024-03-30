function countSubarraySumEqualToK(array, target) {
    let size = array.length;
    let left = 0, right = 0;
    let sum = array[0];
    let count = 0;

    while (right < size) {
        if (sum === target) {
            count++;
        }

        if (sum <= target) {
            right++;
            if (right < size) {
                sum += array[right];
            }
        } else {
            sum -= array[left];
            left++;
        }
    }

    return count;
}

console.log(countSubarraySumEqualToK([3, 1, 2, 4], 6));
