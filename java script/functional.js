function sayName(name)
{
    return 'hello world,' +name;
}
// a function can store in variable and another variable
var hello =sayName;
console.log(hello("fahad"));
var hi=hello;
console.log("Rahat");
// 

//  A function can be stored in an array
var arr=[1,2,3,4]
arr.push(hello)
console.log(arr)
// 

// A function stored as in an object field and properties
var obj={
    name:"fahad1",
    sayName:sayName,
    print: function(){
        console.log("hi");
    }
}
console.log(obj)

// we can pass a function  as an argument
function wow(name,one){
    return one(name)
}

var result=wow("fahad rahman",sayName)
console.log(result);
// 

//  return function in another function

function base(b){
    return function(n)
    {
        var result=1;
        for(var i=0;i<b;i++){
        result *=n;
    }
    return result;
}
}
var power=base(2);
var result=power(5)
console.log(result);