var num = 50;
console.log(pairOfInteger(num));

function pairOfInteger(num){
    var ans =[];
    var a,b;

    for(var i =0;i<=num;i++){
        for(var j=0;j<=num;j++){
            if(i*i + j*j === num){
                console.log(i,j);
                a=i;
                b=j;
               break;
            }
        }
    }
    ans.push(a);
    ans.push(b);
    return ans;

   
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>another program >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>. ")

function isNumberPalindrom(num){
    //  console.log(typeof num);
    console.log("number = " +num);
      var str1 =num.toString();
      console.log("after string = " +str1);
    //  console.log(typeof str1);
     const n= str1.length;
     console.log("length = " +n);
     var ans = false;
     
      for(var i = 0;i<n/2;i++){
          console.log("str1[i] = " +str1[i]);
          console.log("str1[n-1-i] = " +str1[n-1-i]);
          if(str1[i]===str1[n-1-i]){
              return true;
              break;
          }
      }
      return false;
  }
  // var num=46456356;
  // console.log(isNumberPalindrom(num));
  function printPalindrom(n){
      const arr = [];
  
      for(var i = 1 ; i<=n; i++){
          if(isNumberPalindrom(i)){
              arr.push(i);
          }
      }
      return arr;
  }
  console.log(printPalindrom(50));

  