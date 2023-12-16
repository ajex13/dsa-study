/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // declare l, r
    // while l <= r
    // find mid (l + r) // 2
       // if nums[mid] < target 
         // l = mid + 1 
       // if nums[mid] > target
         // r = mid - 1
       // nums[mid] == target
            // return mid 
    // return l
    const n = nums.length;
    let l = 0;
    let r = n - 1;

    while (l <= r) {
        const mid = Number.parseInt((l + r)/2);
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1; 
        } else {
            return mid;
        }
    }

    return l;
};