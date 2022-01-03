
class Car1 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

myCar1 = new Car1("Ford", 2014);
console.log(myCar1)

// 
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

// 

let myCar = new Car("Ford", 2020);
console.log("My car is " + myCar.age()+" years old.My car name is" + myCar.name);

let myPromise = new Promise(function(myResolve, myReject) 
{
    setTimeout(function()
    { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) 
  {
    console.log(value);
  });


// 

  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  let id = Symbol('id');
  person.id = 140353;
  

 console.log( person.id);