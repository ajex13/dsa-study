/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    /*
        if len(dist) - 1 >= hour:
            return -1
        l = 1
        r = 10^7
        ans = 10^7 
        while l <= r: 
            find m
            find hours = findHours(m)
            if hours <= hour:
                ans = min(max, m)
                r = m - 1
            else 
                l = m + 1
        return ans
    */

    const n = dist.length;

    if ( (n - 1) >= hour) {
        return -1;
    }

    let l = 1;
    let r = 10000000;
    let ans = 10000000;

    function findHours(k) {
        let hours = 0;
        for (let i = 0; i < n; i++) {
            if(i !== n - 1) {
                hours += Math.ceil(dist[i] / k)
            } else {
                hours += dist[i] / k;
            }
        }
        
        return hours;
    }

    while (l <= r) {
        const m = parseInt((l + r)/2);
        const hours = findHours(m);

        if (hours <= hour) {
            ans = Math.min(ans, m);
            r = m - 1;
        } else {
            l = m + 1;
        }         
    }

    return ans;
};