function Student(name,age,roll,clss,lahg){
    this.name=name;
    this.age=age;
    this.roll=roll;
    this.clss=clss;
    this.lang=lahg;

    this.display=function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.roll);
        console.log(this.clss);
        console.log(this.lang);
        
    }
}

var studnt1= new Student("fahad","23","1","10",["bangla","english","hindi"])
var studnt2= new Student("fahad","23","02","10",["bangla","english","hindi"])

studnt2.display()
studnt2.display()