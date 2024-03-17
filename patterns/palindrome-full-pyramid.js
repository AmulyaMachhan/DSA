pattern(6);
function pattern(n){
  
let rows = n;
let pattern = "";

 for (let i = 1; i <= n; i++) {
   for(let space=1 ; space <= n-i; space++ ){
     pattern += "  ";
   }
   
   for (let j= 1 ; j<= i; j++){
     pattern += j + " ";
   }
    for(let j= i-1; j>=1; j--){
      pattern += j + " ";
    }
   pattern += "\n";
  } 
  
console.log(pattern);
}

