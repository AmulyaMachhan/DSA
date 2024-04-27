//BRUTE FORCE METHOD
function minimizeMaximumDistanceBetweenGasStations(array , k){
    let n = array.length;
    let howManyGasStationsPlacedAtCertainIndex = new Array(n - 1).fill(0);
    
    for(let gasStations = 1; gasStations <= k ; gasStations++){
        let maxSectionLen = -1;
        let maxIndex = -1;

        for(let i = 0 ; i < n - 1 ; i++){
            let diff = array[i+1] - array[i];
            let sectionLen = diff / (howManyGasStationsPlacedAtCertainIndex[i] + 1);

            if(sectionLen > maxSectionLen){
                maxSectionLen = sectionLen;
                maxIndex = i;
            }
        }
        howManyGasStationsPlacedAtCertainIndex[maxIndex]++;
    }

    let maximumDistance = -1;
    for(let i = 0 ; i < n - 1 ; i++){
        let diff = array[i + 1] - array[i];
        let sectionLen = diff / (howManyGasStationsPlacedAtCertainIndex[i] + 1);

        maximumDistance = Math.max(maximumDistance , sectionLen);
    }

    return maximumDistance;
}

console.log(minimizeMaximumDistanceBetweenGasStations([1,2,3,4,5] , 4));
console.log(minimizeMaximumDistanceBetweenGasStations([1,7] , 2));