year=2021;
if(year>=2021)
{
console.log("Happy NewYear");
}
else{
    console.log("2020");
}

// arrya and indexing
var myArray=[[4,[10,99]],20,[10,120],60];
console.log(myArray[0][1][1]);

// // // obj

var myobj={
    'name':'fahad',
    'age':'23',
    'class':'17',
};
console.log(myobj['name'])

// test
console.log('my name:' +9)

// convert string to number
var num=Number('45.0');
console.log(num)
console.log(Number.parseInt(num));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

var a=6
var b=4
console.log(a+b)

var n=6.87
console.log(Math.PI)
console.log(Math.abs(n))
console.log(Math.floor(n))
console.log(Math.ceil(n))
console.log(Math.max(599,765))
console.log(Math.min(543,7653))
console.log(Math.pow(5,3))
console.log(Math.sqrt(64))
console.log(Math.random(1,100))
console.log(Math.round(Math.random() * 50 +1))


var date=new Date()
console.log(date)
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(date.toTimeString())
