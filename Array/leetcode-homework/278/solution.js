/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // declare l, r 
        // while l <= r
            // find mid 
            // if (bad(m) && !bad(m - 1))
                // return m
            // if (bad(m) && bad(m - 1)) 
                // r = m - 1
            // else 
                // l = m + 1

        let l = 1;
        let r = n;

        while (l <= r) {
            const m = parseInt((l + r) / 2);

            if (isBadVersion(m) && !isBadVersion(m - 1)) {
                return m;
            } else if (isBadVersion(m) && isBadVersion(m - 1)) {
                r = m - 1;
            } else {
                l = m + 1;
            }

        }
        
        return l;
    };
};