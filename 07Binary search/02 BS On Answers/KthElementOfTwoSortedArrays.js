//BRUTE FORCE APPROACH
function KthElementOfTwoSortedArrays( array1 , array2 , k){
    let n1 = array1.length;
    let n2 = array2.length;

    let ans = [];
    let [i , j] = [0 , 0];

    while( i < n1 && j < n2){
        if(array1[i] <= array2[j]) ans.push(array1[i++]);
        else ans.push(array2[j++]);
    }

    while( i < n1) ans.push(array1[i++]);
    while( j < n2) ans.push(array2[j++]);

    console.log(ans);
    return ans[k];
}

console.log(KthElementOfTwoSortedArrays([2,3,6,7,9] , [1,4,8,10] , 5));
console.log(KthElementOfTwoSortedArrays([0] , [1,4,8,10] , 2));

//Time complexity : O(n1)