class Solution {
/**
* @param number n
* @param number k
* @param number[] arr

* @returns number[]
*/
    printFirstNegativeInteger(n, k, arr) {
        // code here
        const queue = []; // [[-8, 0]]
        
        const res = [];
        
        for (let i= 0; i < k; i++) {
            if (arr[i] < 0) {
                queue.push([arr[i], i]);
            }
        }
        
        if (queue.length) {
            res.push(queue[0][0]);
        } else {
            res.push(0);
        }
        
        
        for (let i = k; i < n; i++) {
            while (queue.length) {
                const [_, index] = queue[0];
                if (index <= i - k) {
                    queue.shift();
                } else {
                    break;
                } 
            }
            
            if (arr[i] < 0) {
                 queue.push([arr[i], i]);
            }
            
            if (queue.length) {
                res.push(queue[0][0]);
            } else {
                res.push(0);
            }
        
            
        }
        
        return res;
    }
}
        
