function findMaxThree(arr) {
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
