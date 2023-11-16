function moveZeroesToEnd(arr) {
    let r = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[r]] = [arr[r], arr[i]];
            r++;
        } 
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