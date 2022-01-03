const fahad = {
    eye: "2 Brown",
    leg: "2 legs",
    hair: "Black",
    sleep: function(){
        this.rise();
        console.log("Goto bed 10pm")
    },
    rise: function(){
        console.log("5 am to sleep")

    }
};
console.log(fahad.eye,fahad.leg,fahad.sleep())
console.log(fahad.sleep());
console.log(fahad["eye"]);

// let x = new Number(9);
// console.log(typeof x);
