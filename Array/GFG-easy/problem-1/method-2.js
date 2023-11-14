function findMaxThree(arr) {
    // early return if arr size is less than 3
    // first sort the array (desc is better)
    // Ideally first 3 elements can be returned but since we need to consider for duplicates
    // declare check and count
    // loop over arr
    // if count <= 3 
        // if check != ele
            // push ele to res
            // pushed ele now becomes check
            // count += 1
    // else we come out of loop
    // return res
    
    arr.sort((a, b) => (b - a));

    let check = 0;
    let count = 1;
    let res = [];
  
    for (i = 0; i < arr.length; i++) {
        if (count <= 3) {
            if (arr[i] !== check) {
                res.push(arr[i]);
                check = arr[i];
                count++;
            }
        } else {
            break;
        }
    }

    return res;
}

console.log(findMaxThree(
    [12, 45, 1, -1, 45, 54, 23, 5, 0, -10 ]
));
