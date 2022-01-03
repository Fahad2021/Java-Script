let inp=prompt("enter your name: ");
let uper=inp.toUpperCase();
let lower=inp.toLowerCase();

let frist=uper.slice(0,1);
let total=inp.length;

alert("Hello "+ frist + lower.slice(1,total));

