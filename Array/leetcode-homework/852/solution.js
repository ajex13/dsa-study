/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    // l = 0 , r= n - 1
    // while l <= r
     // m = l + r / 2 
        // if nums[m - 1] < nums[m] && nums[m] > nums[m + 1]
            // return m
        // else if nums[m - 1] < nums[m]
            // l = m + 1
        // else
            // r = m - 1

    const n = arr.length;
    let l = 0;
    let r = n - 1;

    while (l <= r) {
        const m = parseInt((l + r)/2);

        if (arr[m - 1] < arr[m] && arr[m] > arr[m + 1]) {
            return m
        } else if (arr[m] < arr[m + 1]) {
            l = m + 1;
        } else {
            r = m - 1; 
        }
    }
};