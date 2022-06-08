function add(a,b){
    var resAdd = a+b;
    console.log("addition = "+resAdd);
    if(a<b){
        var resMinus = b-a;
    }else {
        var resMinus = a-b;
    }  
    console.log("subtration = "+resMinus);
    var resMul = a*b;
    console.log("Multiplication = "+resMul);
    var divRemain = a%b;
    console.log("After division remainder = "+divRemain);
    var div = a/b;
    console.log("division = "+div);
    
}
add(2,4);

