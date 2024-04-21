// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444

//Optimized approach
!function(n){
    let pattern = "";

    for(let i = 1 ; i <= 2*n - 1 ; i++){
        for(let j=1 ; j<= 2*n - 1; j++){
            let top = i-1;
            let left = j-1;
            let botton = 2*n - i - 1;
            let right = 2*n - j -1;

            pattern += (n - Math.min(top, left , botton , right));
        }

        pattern += "\n";
    }
    console.log(pattern)
}(4);

//easy but lengthy a[]
function printPattern(size) {
    let pattern = '';

    for (let i = size; i >= 1; i--) {
        for (let j = size; j > i; j--) {
            pattern += j;
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            pattern += i;
        }
        for (let j = i + 1; j <= size; j++) {
            pattern += j;
        }
        pattern += '\n';
    }

    for (let i = 1; i < size; i++) {
        for (let j = size; j > i; j--) {
            pattern += j;
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            pattern += i + 1;
        }
        for (let j = i + 1; j <= size; j++) {
            pattern += j;
        }
        pattern += '\n';
    }

    console.log(pattern);
}

printPattern(4);
