function secondHighest (arr) {
    // applying same logic of method-1 of problem-1
    let first, second;
    first = second = Number.MIN_SAFE_INTEGER;

    for (const val of arr) {
        if (val > first) {
            second = first;
            first = val
        } else if (val > second && val !== first) {
            second = val;
        }
    }

    if (second === Number.MIN_SAFE_INTEGER) {
        return null;
    }

    return second;
}


console.log(
    secondHighest(
        [12, 35, 1, 10, 34, 1]
    ),
    secondHighest(
        [10, 5, 10]
    ),
    secondHighest(
        [10, 10, 10]
    ),
)