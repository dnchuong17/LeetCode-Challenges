var countTimes = (nums, n) => {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === n) {
            count++;
        }
    }
    return count;
}

console.log(countTimes([1,1,2,2,2,3,3,4,5], 2));