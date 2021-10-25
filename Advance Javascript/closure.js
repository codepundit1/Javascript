function stopWatch(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}


const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());
console.log(clock1());



//konu akta function theke jodi onno ekta function return kori
// tahole ta ekta closed environment toyri kore,
// nijere ekta value rakhe ..