var containsDuplicate = function(nums) {
    let result = new Set();
    for (let i = 0; i < nums.length; i++) {
        let seen = nums[i];
        if (!result.has(seen)) {
            result.add(nums[i]);
        } else {
            return true;
        }
    }
    return false;
};


console.log(containsDuplicate([1,2,3,4,1]));