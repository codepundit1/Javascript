//Argument ==> Array like objet

function Numbers (num1, num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2] + arguments[3];
}

const result = Numbers(2,3,5,1);
console.log(result);