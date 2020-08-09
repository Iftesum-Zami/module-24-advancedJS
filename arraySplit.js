const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);    // after 2nd element to 5th element. not affects origin array
const removed = nums.splice(2,5,77,99,33); // after 2nd element take 5 numbers. Effects origin array. After 2 values remaining will be injected/pushed
const together = nums.join("Ami, ");

// console.log(part);
// console.log(removed);
// console.log(nums);

console.log(together);