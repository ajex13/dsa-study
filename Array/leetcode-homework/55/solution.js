/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // declare a ans arr of bool vals
    // set n - 1  of ans as true
    // arr traversal of nums in reverse order n - 2 .. 0
        // based on val at index i select a possible range
        // declare helper function isJumpPossible(s, e)
            // in this range find if atleast one true exists
            //  logical or
        // if it exists then set true for i in ans arr 
    // return ans[0]

    const n = nums.length;

    const ans = [];
    ans[n - 1] = true;

    for (let i = n - 2; i >= 0; i--) {
        ans[i] = isJumpPossible(i + 1, i + nums[i]);
    }

    return ans[0];

    function isJumpPossible(s, e) {
        let res = false;

        for (let i = s; i <= e; i++) {
            res = res || ans[i];
        }

        return res;
    }
};