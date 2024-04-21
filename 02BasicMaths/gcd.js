function gcd(a,b){
    let length;
    let arr=[];
    if(a>b){
        length = b;
    }else{
        length = a;
    }
    for(let i = 1; i <= length  ; i++ ){
        if(a%i==0 && b%i==0){
            arr.push(i);
        }
    }
    console.log(Math.max(1,arr[arr.length - 1]));
}

gcd(20,21);


//optimal approach
function gcd2(a,b){
    if(a>b){
        if(b===0){
            return a;
        }
        return gcd2(b, a%b);
    }else{
        if(a===0){
            return b;
        }
        return gcd2(a, b%a);
    }
}

console.log(gcd2(75,48));
console.log(gcd2(55,56));
console.log(gcd2(80,80));