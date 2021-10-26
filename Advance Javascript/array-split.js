 const numbers = [1,2,3,4,5,6,7,8,9];
 const half = numbers.slice(2, 6);
 console.log(half);


 const remove = numbers.splice(2, 3, 77, 55, 66);
 console.log(remove);
 console.log(numbers)


 const together = numbers.join(" ");
 console.log(together);