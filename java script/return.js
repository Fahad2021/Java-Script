// function name(firstname,lastname,gender){
//     var output;

//     if(gender="male"){
//         output='mr.'+firstname+' '+lastname;
//     }
//     else if(gender="female"){
//         output='ms.'+firstname+' '+lastname;

//     }
//     return output
// }
// var fullname= name('asm','fahad','male');
// console.log(fullname)

function example(){
    return{
        name:'fahad',
        skill:['python','javascript'],
        print:function(){
            console.log(this.name,this.skill);
        }
    }
}
var obj=example();
obj.print();