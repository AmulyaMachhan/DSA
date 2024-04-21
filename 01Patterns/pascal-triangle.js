pattern(7);
function pattern(n){
    let rows = n;
    
    let pattern = "";
    const a=[];
    for (let i = 1; i <= n; i++) {
        a[i]= []
        for(let space = 1; space <= n-i; space++){
          pattern += "  ";
        }
        
        for (let j=1 ; j<=i; j++){
          if(j==1 || j==i){
            a[i][j]=1;
          pattern += "1"+ "   ";
          }
          else{
            a[i][j]= a[i-1][j-1] + a[i-1][j];
            pattern += a[i][j]+ "   ";
          }
        }
    
    
       pattern += "\n";
    }
    console.log(pattern);
  }

//             1   
//           1   1   
//         1   2   1   
//       1   3   3   1   
//     1   4   6   4   1   
//   1   5   10   10   5   1   
// 1   6   15   20   15   6   1  




const arr1=[1,2,3,4,5,6,7,8];
function insertion(arr , elementInserted , indexOfElement){

  for(let i= arr.length-1 ; i>=indexOfElement ; i--){
    arr[i+1]=arr[i];
  }
  arr[indexOfElement]= elementInserted;
  console.log(arr);
}
insertion(arr1, 10 , 3);