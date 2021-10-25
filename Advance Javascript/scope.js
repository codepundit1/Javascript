let bonus = 5;  //Global Variable

function name(firstName, secondName){
    let nameCount = firstName + secondName +bonus;// local variable > its private
    return nameCount;
}

const result = name(10, 15);
console.log(result);

//hoisting
//block scope
//global scope