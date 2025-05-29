var BiggestNumber = (nums) => {
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}


console.log(BiggestNumber([1,2,3,4,5]));