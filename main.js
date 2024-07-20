let numbers = [1, 2, 3, 4, 5, 6];
console.log(eval(numbers.join("+")));

let nums = [1, 2, 2, 1, 5, 1, 5, 2, 3, 8, 9, 2];
let set = new Set(nums);
let array = Array.from(set);
console.log(array);

let numms = [1, 2, 3, 4, 5];
console.log(Math.max(...numms));

let str = "mustafa";
console.log([...str].reverse().join(""));
