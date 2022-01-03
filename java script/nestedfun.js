// function outer(){
//     // global variable
// var b=4;           

// function inner(){
//     b;
//     console.log("I am inner function");
// }
// inner();
//         console.log("I am Outer function");
// }

// outer()

function sum(a,b){
   
    function add(){
        return a+b;
    }
    function div(){
        return a-b;
    }
    function mul(){
        return a*b;
    }
    function divid(){
        return a/b;
    }
return add()+ div()+ mul()+ divid();
}
var result=sum(10,2)
console.log(result)