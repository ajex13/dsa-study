/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    /*
        u = 0, d = m
        s_row = 0
        while u <= d:
            mid = (u + d) // 2
            if target >= matrix[mid][0] and target <= matrix[mid][n]:
                if matrix[mid][0] == target or matrix[mid][n] == target: 
                    return true
                selected_row = mid 
            elsif target < matrix[mid][0]:
                d = mid - 1
            else:
                u = mid + 1
        
        l = 0, r = n

        while l <= r:
            mid = (l + r) // 2
            if matrix[s_row][mid] == target :
                return true
            elsif matrix[s_row][mid] > target:
                l = mid + 1
            else: 
                r = mid - 1 
        
        return false
        

    */
    const m = matrix.length - 1;
    const n = matrix[0].length - 1;

    let u = 0;
    let d = m;

    let sRow = -1

    while (u <= d) {
        const mid = parseInt((u + d)/2);

        if (target >= matrix[mid][0] && target <= matrix[mid][n]) {
            if (matrix[mid][0] == target || matrix[mid][n] == target) {
                return true;
            }
            sRow = mid;
            break;
        } else if (target < matrix[mid][0]) {
            d = mid - 1;
        } else {
            u = mid + 1;
        }
    }

    if (sRow === -1) {
        return false;
    }

    let l = 0;
    let r = n;

    while (l <= r) {
        const mid = parseInt((l + r)/2);

        if (matrix[sRow][mid] === target) {
            return true;
        } else if (matrix[sRow][mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return false;
};