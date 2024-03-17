// ********1********
// *******2*2*******
// ******3*3*3******
// *****4*4*4*4*****
// ****5*5*5*5*5****

pattern(5);
function pattern(n){
let rows = n;
let pattern = "";

for (let i = 1; i <= n; i++) {
  
   for(let star= 1 ; star<=n-i + 4; star ++ ){
     pattern += "*";
   }
   for (let j= 1 ; j<= 2*i-1; j++){
        
        if(j % 2 == 0){
          pattern += "*";
        }
        else{
          pattern += i;
        }
     }
   for(let star= 1 ; star<=2*n-i -1; star ++ ){
     pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);
}