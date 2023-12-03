/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    //  2 3 1 1 4
    //  2 1 2 1 0

    // declare one new arr of n

    // reverse traversal nums
        // n - 2 .. 0
        // 
        // ans[pos] = getMin(pos + 1, pos + nums[pos]) + 1

    // return ans[2,1,2,1,0]

    const n = nums.length;
    const ans = [];

    ans[n-1] = 0;

    for (let i = n - 2; i >= 0; i--) {
        ans[i] = getMin(i + 1, i + nums[i]) + 1;
    }

    return ans[0];

    function getMin(s, e) {
        let min = Number.MAX_SAFE_INTEGER;

        for (let i = s; i <= e; i++) {
            if (ans[i] < min) {
                min = ans[i];
            }
        }

        return min;
    }

};