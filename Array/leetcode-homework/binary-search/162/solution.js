/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const n = nums.length;

    let l = 0;
    let r = n - 1;

    while(l <= r) {
        const m = parseInt((l + r)/2);

        if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) {
            return m;
        } else if (nums[m] < nums[m + 1]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return l;
};