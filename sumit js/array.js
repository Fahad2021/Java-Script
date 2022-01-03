const ary=["f","a","h","a","d"];
len=ary.length;
for(i=0;i<len;i++){
    console.log(i);
    console.log(ary[i]);
}


// for eatch
function myfun(value){
    console.log(value);

}
ary.forEach(myfun);


ary[9]="t";
console.log(ary)

const x=[9,2,35,4,18,6,5,1];
x.sort(function com(a,b){
    return a-b;
});
console.log(x);

const x=[2,5,67,2,3,4,6,7];
x.sort(function com(a,b){
    return b-a;
});
console.log(x);

// iteration array

const val=[2,3,4,5,6];
function fun(value,index,array){
    console.log(value);
    console.log(index);
    console.log(array);

}
val.forEach(fun);

const val=[2,4,6,8,9,7];
function fun(value){
    return value*2;
}
const newAry=val.map(fun);
console.log(newAry);

const num=[4,23,56,12,66,97,40];
function arry(value,index,array){
    return value<40;
}
console.log(num.filter(arry));

const num=[1,2,3,4,5,6,7,8,9,10];
function aryfun(total,value,index,array){
    console.log(total);
    return total+value;
}
console.log(num.reduce(aryfun));

const num=[2,3,4,5,6,7];
function myfunction(value,index,array){
    return value>6;
}
console.log(num.find(myfunction));

const num=[4,23,56,12,66,97,40];
let val =num.filter((item) => {
    return item<40;
});
console.log(val);