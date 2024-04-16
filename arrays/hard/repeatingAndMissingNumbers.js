//OPTIMAL APPROACH - 2
function repeatingAndMissingNumbers_2(a){
    let n = a.length;
    let xr = 0;
    for(let i = 0 ; i < n ; i++){
        xr = xr ^ a[i];
        xr = xr ^ (i + 1);
    }
    const number = (xr & ~(xr - 1));

  //Step 3: Group the numbers:
  let zero = 0;
  let one = 0;
  for (let i = 0; i < n; i++) {
    //part of 1 group:
    if ((a[i] & number) != 0) {
      one = one ^ a[i];
    }
    //part of 0 group:
    else {
      zero = zero ^ a[i];
    }
  }

  for (let i = 1; i <= n; i++) {
    //part of 1 group:
    if ((i & number) != 0) {
      one = one ^ i;
    }
    //part of 0 group:
    else {
      zero = zero ^ i;
    }
  }

  // Last step: Identify the numbers:
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] == zero) cnt++;
  }

  if (cnt == 2) return [zero, one];
  return [one, zero];
}

console.log(repeatingAndMissingNumbers_2([3,1,2,3,4]))

//OPTIMAL APPROACH - 1
function repeatingAndMissingNumbers_1(array){
    let n = array.length;

    let SN = (n*(n+1))/2;
    let S2N = (n*(n+1)*(2*n+1))/6;

    let S=0 , S2=0;
    for(let i = 0 ; i < n ; i++){
        S += array[i];
        S2 += array[i] * array[i];
    }

    let val1 = S - SN;
    let val2 = (S2 - S2N)/val1;

    let X = (val1 + val2)/2;
    let Y = X - val1;

    return [X , Y];
}

console.log(repeatingAndMissingNumbers_1([3,1,2,4,2]))

//BETTER APPROACH
function repeatingAndMissingNumbers(array){
    let hashMap = {};

    for(let i = 0; i < array.length ; i++){
        if(hashMap[array[i]]){
            hashMap[array[i]]++;
        }else{
           hashMap[array[i]] = 1;
        }
    }
    console.table(hashMap)
    let repeating;
    let missing;
    for(let i = 0; i < array.length ; i++){
        if(hashMap[i] == 2){
            repeating = i;
        }

        if(hashMap[i] == undefined){
            missing = i
        }
    }

    return [repeating , missing];
}

console.log(repeatingAndMissingNumbers([3,1,2,5,3]))