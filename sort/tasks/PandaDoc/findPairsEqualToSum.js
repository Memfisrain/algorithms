function findPairsEqualToSum(arr, sum) {
    const temp = {};
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        const remaining = sum - curr;

        if (temp[curr] !== undefined) {
            res.push([temp[curr], curr]);
            delete temp[curr];
        } else {
            temp[remaining] = curr;
        }
    }

    console.log(res);
}

findPairsEqualToSum([2,5,4,1,7,-3,2,0,-1], 4) // [[2,2], [5,-1], [4,0], [7,-3]]
findPairsEqualToSum([2,5,4,1,7,-3,2,0,-1], -1) // [[2,-3], [0, -1]]
findPairsEqualToSum([2,5,4,1,7,-3,2,0,-1], 10) // []