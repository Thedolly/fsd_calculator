function iterate(){
for(var i=1;i<=100;i++){
    if(i%3==0){
        console.log("Relevel = " +i);
    }else if(i%5==0){
        console.log("Buzz = " +i);
    }else if(i%15==0){
        console.log(" 6indBuzz = " +i);
    }else{
        console.log("number = " +i);
    }
}
}

function isPerfectSquare(n){
    let ans = false;
    for(var i =1;i*i<=n;i++){
        if(i*i==n){
            ans=true;
        }
    }
    return ans;
}




function evenOdd(){
for(var i=1;i<=100;i++){
    if(i%2==0){
        console.log("even number = " +i);
    }else{
        console.log("odd number = " +i);
    }
}
}

function assignment22jan(){
    console.log("first perfect square = ");
    console.log("\n");
    const ans = isPerfectSquare(64);
    console.log(isPerfectSquare(ans));
    console.log("\n");
    console.log("Even odd numbers = ");
    console.log("\n");
    evenOdd();
    console.log("\n");
    console.log(" iterate numbers = ");
    console.log("\n");
    iterate();

}

console.log("assignment 22jan = " +assignment22jan());