const numbers= [3,5,6,5,8,7];
// const output = []


// for(let i =0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// const squre = element => element * element;
// const squre = x => x * x;

// const result = numbers.map(x => x * x);
const result = numbers.map(function(element){
    return element * element;
})
console.log(result);

const bigger = numbers.filter(x => x>6);
console.log(bigger);


// find like as filter but filter return arrary , find return single value.