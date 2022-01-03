// // problem 1
// function getrandomnum(max,min){
//     return Math.floor(Math.random() * (max-min+1)) + min;
// }
// console.log(getrandomnum(1,6));

// const ary=['fahad','akib','rakib','dihan'];
// console.log(ary.sort());

// // problem 2
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function myFunction2(a,b){

//    return a-b;
    
// });
// console.log(points);

// // Problem 3
// function isLeapyear(year){
//     if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !==0))){
//         console.log(`${year} is leap Year`);
//     }
//     else{
//         console.log(`${year} is not leap Year`);
//     }

// }
// isLeapyear(2022);

// problem 4


// const vowels=["a","e","i","o","u","A","E","I","O","U"];

// function vowelcount(sentence){
//     let count=0;
//     const letters=Array.from(sentence);
//     letters.forEach(function(value){
//         if(vowels.includes(value)){
//             count ++;
//         }
//     });
//     return count;
// }
// console.log(vowelcount("my name is fahad"));


// problem 5
const ary=[1,2,3,3,5,6,6,7,7,6,4,4];
const duplicate=ary.filter(function(value,index,array){
    return ary.indexOf(value) !== index
});
console.log(duplicate);