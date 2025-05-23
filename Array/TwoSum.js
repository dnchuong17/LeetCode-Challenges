var twoSum = function(nums, target) {
    let missingNumber = new Map();

    for (let i = 0; i < nums.length; i++) {
        let result = target - nums[i];

        if (missingNumber.has(result)) {
            return [missingNumber.get(result), i];
        }
        missingNumber.set(nums[i], i);
    }

    return [];
};

console.log(twoSum([2,7,11,15], 9));