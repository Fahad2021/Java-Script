var man={name:"rahat",age:"24",heght:"5.3' "}
console.log("His names"+" "+man.name+"."+"He is"+" "+man.age+"years old")


// 
var text="";
var man={name:"rahat",age:"24",heght:"5.3' "};
var i;
for(i in man){
    text+=man[i]+" ";
}
console.log(text)

// 
var man={firatname:"rahat",
         lastname:"rahman",
                age:"24",
                heght:"5.3'",
                fullname(){
                    return this.firatname+" "+this.lastname;
                }
            };
console.log(man.fullname())
// 
var a="fahad";
console.log(b=a.toUpperCase())

// 
var person = {name:"John", age:50, city:"New York"};

var myString = JSON.stringify(person);
console.log(myString)

// 
var person = {name:"John", age:function () {return 30;}};

var myString = JSON.stringify(person);
console.log(myString)