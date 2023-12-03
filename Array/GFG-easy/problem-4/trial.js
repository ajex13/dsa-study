function makeEvenGreater (arr) {
    // sort arr in asc order
    // place first n/2 on odd 
    // remaining on even

    const n = arr.length;
    arr.sort((a, b) => (a - b));
    // 1 1 2 2
    const ans = []; 
    let l = 0;
    let r = n - 1;

    for (let i = 0; i < n; i++) {
        if ((i + 1) % 2 === 0) {
            ans[i] = arr[r--];
        } else {
            ans[i] = arr[l++];
        }
    }

    return ans;
}

console.log(
    makeEvenGreater(
        [1, 2, 2, 1]
    ),
    makeEvenGreater(
        [1, 3, 2]
    )
)