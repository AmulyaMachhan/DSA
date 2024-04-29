//OPTIMAL APPROACH
function KthElementOfTwoSortedArrays_2( array1 , array2 , k){
    let n1 = array1.length;
    let n2 = array2.length;

    if(n1 > n2) return KthElementOfTwoSortedArrays_2(array2 , array1 , k);

    let low = Math.max( 0 , k - n2);
    let high = Math.min( k , n1);

    while(low <= high){
        let cut1 = Math.floor((low + high) / 2);
        let cut2 = k - cut1;

        let l1 = Number.MIN_SAFE_INTEGER , l2 = Number.MIN_SAFE_INTEGER ;
        let r1 = Number.MAX_SAFE_INTEGER , r2 = Number.MAX_SAFE_INTEGER ;

        if(cut1 > 0)l1 = array1[cut1 - 1];
        if(cut2 > 0)l2 = array2[cut2 - 1];
        if(cut1 < n1)r1 = array1[cut1];
        if(cut2 < n2)r2 = array2[cut2];

        if(l1 <= r2 && l2 <= r1) return Math.max(l1, l2);
        else if(l1 > r2) high = cut1 - 1;
        else low = cut1 + 1;
    }
    return 1;
}

console.log(KthElementOfTwoSortedArrays_2([2,3,6,7,9] , [1,4,8,10] , 5));
console.log(KthElementOfTwoSortedArrays_2([0] , [1,4,8,10] , 2));

//BETTER APPROACH
function KthElementOfTwoSortedArrays_1(array1 , array2 , k){
    let n1 = array1.length ;
    let n2 = array2.length ;
    
    let [i , j] = [0 , 0];
    let count = 0;
    let ans = 0;
    while( i < n1 && j < n2){
        if(count === k ){
            break;
        }
        else if(array1[i] <= array2[j]) {
            ans = (array1[i++]);
            count++;
        }
        else {
            ans = (array2[j++]);
            count++;
        }
    }

    if(count !== k){
        if(i != n1 - 1) ans = array1[k - count];
        if(j != n2 - 1) ans = array2[ k - count];
    }
    return ans;
}

console.log(KthElementOfTwoSortedArrays_1([2,3,6,7,9] , [1,4,8,10] , 5));
console.log(KthElementOfTwoSortedArrays_1([0] , [1,4,8,10] , 2));

//Time Complexity :
//We iterate at total k times. This makes time complexity to O(k)

//Space Complexity :
//We do not use any extra data structure and hence, the time complexity is O(1).

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
    return ans[k - 1];
}

console.log(KthElementOfTwoSortedArrays([2,3,6,7,9] , [1,4,8,10] , 5));
console.log(KthElementOfTwoSortedArrays([0] , [1,4,8,10] , 2));

//Time complexity : 
//We create a new array which we iterate over the longer array times = O(n1 + n2)

//Space complexity : 
//New Array is constructed so space complexity O(n1 + n2);