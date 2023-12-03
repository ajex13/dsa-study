/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // mid = 6 
    // 1 1 2 2 == 6h
    // mid = 3
    // 1 2 3 4 = 10h
    // mid = 4
    // 1 2 2 3 = 8h 

    // max element arr 
    // l = 1
    // r = max
    // ans = max
    // while l <= r
        // find m
        //  hours = findHours(m)
        // if hours == h
            // return m
        // else hours < h 
            // ans = min(ans, m)
            // r = m - 1
        // else 
            // l = m + 1

    // return ans

    function findHours(k) {
        let hours = 0;
        for (const each of piles) {
            hours += Math.ceil(each / k)
        }
        return hours;
    }

    let max = Number.MIN_SAFE_INTEGER;

    for (const each of piles) {
        if (each > max) {
            max = each
        }
    }

    let l = 1;
    let r = max;
    let ans = max;

    while (l <= r) {
        const m = parseInt((l + r) / 2);

        const hours = findHours(m);
        if (hours <= h) {
            ans = Math.min(ans, m);
            r = m - 1;
        } else {
            l = m + 1;
        }
    }

    return ans;
};