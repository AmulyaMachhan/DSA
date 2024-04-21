//OPTIMAL APPROACH
function threeSum_3(array){
    let res = [];
    let n = array.length;
    array.sort((a,b) => a -b)
    for(let i = 0 ; i < n ; i++){
        if(i != 0 && array[i] == array[i -1]) continue;

        let j = i + 1 ;
        let k = n - 1;
        while(j < k){
            let sum = array[i] + array[j] + array[k];
            if(sum < 0){
                j++;
            }else if(sum > 0){
                k--;
            }else{
                let temp = [array[i] , array[j] , array[k]];
                res.push(temp);
                j++;
                k--;

                while(j < k && array[j] == array[j-1]) j++;
                while(j < k && array[k] == array[k+1]) k--;
            }
        } 
    }
    return res;
}
console.table(threeSum_3([-1, 0, 1, 2, -1, -4]))
console.table(threeSum_3([-1,0,1,0]))

//BETTER APPROACH
function threeSum_1(array){
    let n = array.length;
    let res = []
    for(let i = 0 ; i < n ; i++){
        let hashMap = new Set();
        for(let j = i+1 ; j < n ; j++){
            let third = -(array[i] + array[j]);

            if(hashMap.has(third)){
                let temp = [array[i] ,array[j], third];
                temp.sort((a,b) => a - b);
                res.push(temp);
            }

            hashMap.add(array[j]);
        }
    }
    
    let set  = new Set(res.map(JSON.stringify));
    res = Array.from(set).map(JSON.parse);
    return res;
}
console.table(threeSum_1([-1, 0, 1, 2, -1, -4]))
console.table(threeSum_1([-1,0,1,0]))

//BRUTE FORCE APPROACH
function threeSum(array){
    let n = array.length;
    let ans = [];
    for(let i= 0 ; i < n ; i++){
        for(let j = i + 1 ; j < n ; j++){
            for(let k = j + 1; k < n ; k++){
                if(array[i] + array[j] + array[k] === 0){
                    let temp = [array[i] ,array[j], array[k]];
                    temp.sort((a,b) => a - b)
                    ans.push(temp)
                }
            }
        }
    }
    let set  = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}

console.table(threeSum([-1, 0, 1, 2, -1, -4]))