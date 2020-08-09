const numbers = [3, 4, 5, 6, 7];  
const bigger = numbers.filter(x => x>=5);
console.log(bigger);

const result = numbers.find(x => x>=5);
console.log(result);   // find is used for printing the first matching element(without an array)


// for each
// reduce