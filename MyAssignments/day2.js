/*  Premitives 
*/
var accountHolderName //Undefined
var accountHolderName = "Balaji"
// const accountNumber - not diclered
const accountNumber = 1234567
let password //TDZ (Temporal Dead Zone) applied 
//let password =1234
password = "abcd1234" //reassignment
console.log(accountHolderName)
console.log(typeof accountNumber)

function addition(a,b){ //Function definition (parameters)
    // var a = 11
    // var b = 22
    c=a+b
    console.log("summ of a and b is "+ c);    
}
addition(11,33) //Function call (argument)

function multiplication(a,b){ //Function definition (parameters)
    var c=a*b // var is a function block
    return c   
}
console.log(multiplication(11,23));  //Function call (argument)

if(true){
console.log(c);
    
console.log(multiplication(11,23));
}
console.log(c);

password=12345
password+=10
console.log(password++); //post incriment addes after the printing.

password-=10
console.log(password);
console.log(++password); //pre increment addes before printing

