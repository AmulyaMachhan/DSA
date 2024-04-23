//OPTIMAL APPROACH (Further optimisation to binary search)
//Time Complexity = O(logN) => N = array size
function minimumElementInRotatedSortedArray_1(array){
    let low = 0 , high = array.length - 1;
    let min = Infinity;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        //if the entire search space between the low and high indexes is sorted
        //this means the min is at the low pointer
        if(array[low] <= array[high]){
            min = Math.min(min , array[low]);
            break;
        }

        //if left half is sorted
        if(array[low] <= array[mid]){
            min = Math.min(min , array[low]);

            //eliminate the left half
            low = mid + 1;
        }
        //if right half is sorted
        else{
            min = Math.min(min , array[mid]);
            
            //eliminate the right half
            high = mid - 1;
        }
    }
}

//BETTER APPROACH
function minimumElementInRotatedSortedArray(array){
    let low = 0, high = array.length - 1;
    let min = Infinity;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        //if left half is sorted
        if(array[low] <= array[mid]){
            min = Math.min(min , array[low]);
            
            //eliminate left half
            low = mid + 1;
        }
        //if right half is sorted
        else{
            min = Math.min(min , array[mid]);
            
            //eliminate the right half
            high = mid - 1;
        }
    }
    return min;
}

console.log(minimumElementInRotatedSortedArray([4,5,6,7,0,1,2,3]));
console.log(minimumElementInRotatedSortedArray([3,4,5,1,2]));

//BRUTE FORCE APPROACH
//Using the linear search we can directly find the lowest element 
//This will give the time complexity O(n)