const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < nums.length; i++){
    const element = nums[i];
    
    if (element > 5){
        break;
    }
    // console.log(element);
}

const nums2 = [-1, 2, -3, 4, -5, 6, -7, 8, -9];

for(let i = 0; i < nums2.length; i++){
    const element = nums2[i];
    if (element < 0){
        continue;   // skip the values
    }
    console.log(element);
}