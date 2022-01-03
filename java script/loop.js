var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var len = cars.length;
var text = "";

for (; i < len; i++) {
  text += cars[i] + "<br>";
}

console.log(text)


var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}
console.log(txt)