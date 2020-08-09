const numbers = [3, 4, 5, 6, 7];

//---------------------------------------method-1-------------------------------

// const squire = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     squire.push(result);
// }

//---------------------------------------method-2-------------------------------

// function squire(element) {
//     return element * element;
// }

                                    // or

// const squire = element => element * element;

//---------------------------------------method-3-------------------------------

const result = numbers.map(function(element) { // previous function has entered(shortcut)
    return element * element;
});

                                      // or
// const result = numbers.map(element => element * element)

console.log(result);