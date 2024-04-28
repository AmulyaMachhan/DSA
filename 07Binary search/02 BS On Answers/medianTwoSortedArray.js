//Problem Statement: 
//Given two sorted arrays arr1 and arr2 of size m and n respectively , return the median of the two sorted arrays. 
//The median is defined as the middle value of a sorted list of numbers. 
//In case the length of the list is even, the median is the average of the two middle elements.

//OPTIMAL APPRACH
function medianTwoSortedArray_2(array1 , array2){
    let n1 = array1.length ;
    let n2 = array2.length ;

    if(n1 > n2) return medianTwoSortedArray_2(array2 , array1);

    let low = 0;
    let high = n1; 
    let left = Math.floor((n1 + n2 + 1)/2);
    let n = n1 + n2;

    while(low <= high){
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left - mid1;

        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER;
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER;

        if(mid1 < n1) r1 = array1[mid1];
        if(mid2 < n2) r2 = array2[mid2];
        if(mid1 - 1 >= 0) l1 = array1[mid1 -1];
        if(mid2 - 1 >= 0) l2 = array2[mid2 -1];

        if(l1 <= r2 && l2 <= r1){
            if(n % 2 === 1) return Math.max(l1 ,l2);
            else return (Math.max(l1 , l2) + Math.min(r1 , r2))/2;
        }

        else if(l1 > r2) high = mid1 - 1;
        else low = mid1 + 1;
    }

    return 0;
}

console.log(medianTwoSortedArray_2([1, 3, 5] , [2, 4, 6]));
console.log(medianTwoSortedArray_2([1, 4, 7, 10, 12] , [2, 3, 6, 15]));

//Time Complexity: O(log(min(n1,n2))), where n1 and n2 are the sizes of two given arrays.
//Reason: We are applying binary search on the range [0, min(n1, n2)].

//Space Complexity: O(1) as no extra space is used.

//BETTER APPROACH
function medianTwoSortedArray_1(array1 , array2){
    let n1 =array1.length ;
    let n2 = array2.length ;

    let count = 0;
    let n = n1 + n2;
    let medianIndex1 = Math.floor(n / 2);
    let medianIndex2 = medianIndex1 - 1;
    
    let elementAtMedianIndex1 = -1;
    let elementAtMedianIndex2 = -1;

    let i = 0; j = 0;
    while(i < n1 && j < n2){
        if(array1[i] < array2[j]){
            if(count == medianIndex1) elementAtMedianIndex1 = array1[i];
            if(count == medianIndex2) elementAtMedianIndex2 = array1[i];
            count++;
            i++
        }else{
            if(count == medianIndex1) elementAtMedianIndex1 = array2[j];
            if(count == medianIndex2) elementAtMedianIndex2 = array2[j];
            count++;
            j++;
        }
    }

    while( i < n1){
        if(count === medianIndex1) elementAtMedianIndex1 = array1[i];
        if(count === medianIndex2) elementAtMedianIndex2 = array1[i];
        count++;
        i++;
    }

    while( j < n1){
        if(count === medianIndex1) elementAtMedianIndex1 = array2[j];
        if(count === medianIndex2) elementAtMedianIndex2 = array2[j];
        count++;
        j++;
    }

    if(n%2 == 1) return elementAtMedianIndex1;

    const median = (elementAtMedianIndex1 + elementAtMedianIndex2)/2;
    return median;
}

console.log(medianTwoSortedArray_1([1, 3, 5] , [2, 4, 6]));
console.log(medianTwoSortedArray_1([1, 4, 7, 10, 12] , [2, 3, 6, 15]));

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

//Time Complexity: O(n1+n2), where  n1 and n2 are the sizes of the given arrays.
//Reason: We traverse through both arrays linearly.

//Space Complexity: O(n1+n2), where  n1 and n2 are the sizes of the given arrays.
//Reason: We are using an extra array of size (n1+n2) to solve this problem.