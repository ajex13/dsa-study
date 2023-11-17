function moveZeroesToEnd(arr) {
    // declare 2 variables l & r, initialize to 0 

    // loop over the array with r

    // l should keep track of next zero to be swapped 

    // while looping over the array if elemet at r is non zero swap it with element at l
    // increment l by 1 in this conditional
    let l, r;
    l = r = 0;

    while (r < arr.length) {
        if (arr[r] !== 0) {
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