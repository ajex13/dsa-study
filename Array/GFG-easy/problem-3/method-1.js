function moveZeroesToEnd(arr) {
    // decalre l and r 
    let l = 0;
    let r = 0;

    // traverse the arr with r pointer
    while (r < arr.length) {
        // if ele at r is non zero 
        if (arr[r] !== 0) {
            // swap and move l so that it keeps track of next zero to be swapped
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
        }    
        r++;
    }

    return arr;
}


console.log(
    moveZeroesToEnd(
    [1, 2, 0, 4, 3, 0, 5, 0]
    ),
    moveZeroesToEnd(
    [1, 2, 0, 0, 0, 3, 6]    
    )
)