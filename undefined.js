let tom;     // undefined for not setting value of variable
console.log(tom);



function add(num1, num2) {
    const sum = num1 + num2;  // undefined for not returning
}
const result = add(10, 20);
console.log(result);



function add2(num1, num2 = 0){
    console.log(num2);
    return;
}
const result2 = add2(10);
console.log(result2);


const ages = [11, 10, 12];
console.log(ages[11]);


const student = {name: tom, age: 12};
console.log(student.gf);