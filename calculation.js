document.getElementById("btn").addEventListener("click",
 function(){
    var num1=
    parseInt(document.getElementById("num1").value);
    var num2=
    parseInt(document.getElementById("num2").value);
    var operation=
    document.getElementById("operation").value;
    var result=0;

    if(operation=="Addition"){
        result=num1+num2;
    }
    else if(operation=="Subtraction"){
        result=num1-num2;
    }
    else if(operation=="Multiplication"){
        result=num1*num2;
    }
    else if(operation=="Division"){
        result=num1/num2;
    }
    else if(operation=="Modulus"){
        result=num1%num2;
    }
    document.getElementById("result").value=result;
    
    

})