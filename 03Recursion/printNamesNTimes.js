function printNameNTimes(n){
    if(n==0){
        return ;
    }
    console.log('Amulya');
    printNameNTimes(n-1);
};

printNameNTimes(5);