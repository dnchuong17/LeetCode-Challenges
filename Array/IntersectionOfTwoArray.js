//Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

var intersect = function(nums1, nums2) {
    const count = new Map();
    const result = [];

    for (let num of nums1) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    for (let num of nums2) {
        if (count.get(num) > 0) {
            result.push(num);
            count.set(num, count.get(num) - 1);
        }
    }

    return result;
};

console.log(intersect([1,2,2,1], [2,2]));

