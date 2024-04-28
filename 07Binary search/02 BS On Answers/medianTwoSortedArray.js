//BRUTE FORCE APPROACH
function medianTwoSortedArray( array1 , array2){
    let n1 = array1.length ;
    let n2 = array2.length ;

    let result = [];
    let i = 0; j = 0;
    while( i < n1 && j < n2){
        if(array1[i] <= array2[j])  result.push(array1[i++]); 
        else result.push(array2[j++]);
    }

    while(i < n1) result.push(array1[i++]);
    while(j < n2) result.push(array1[j++]);

    let n = n1 + n2;

    if(n % 2 === 1) return result[Math.floor(n/2)];

    const median = (result[n / 2] + result[(n / 2) - 1]) / 2.0;
    return median;
}

console.log(medianTwoSortedArray([1, 3, 5] , [2, 4, 6]));
console.log(medianTwoSortedArray([1, 4, 7, 10, 12] , [2, 3, 6, 15]));