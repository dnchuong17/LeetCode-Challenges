var moveZeroes = function(nums) {
    let digit = 0;

    for (let i = 0; i< nums.length; i++) {
        if (nums[i] !== 0) {
            nums[digit] = nums[i];
            digit++;
        }
    }

    while (digit < nums.length) {
        nums[digit] = 0;
        digit++;
    }

    return nums;
};


console.log(moveZeroes([0,1,0,3,12]));