
function findMaxThree(arr) {
    // define 3 vars and initialize with min value
    // loop over array 
    // if val > first 
    // cascade  second's value to third, first's value to second and set val to first
    // else if val > second and val != first 
    // cascade second's value to third and set val to second
    // else if val > third and val != second 
    // set val to third 
    // print vals

    let first, second, third;
    first = second = third = Number.MIN_SAFE_INTEGER; 

    for (let val of arr) {
        if (val > first) {
            third = second; 
            second = first;
            first = val
        } else if (val > second && val !== first) {
            third = second;
            second = val;
        } else if (val > third && val !== second) {
            third = val;
        }
    }

    return [first, second, third];

}

console.log(findMaxThree([10, 4, 3, 50, 23, 90]));