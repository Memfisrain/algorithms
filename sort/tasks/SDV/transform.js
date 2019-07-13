function transform(arr, offset) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[(arr.length + offset + i) % arr.length] = arr[i];
    }

    console.log(result);
}


function transformOnSite(arr, offset) {
    const normalizedOffset = (arr.length + offset) % arr.length; // (5 + -3) % 5 -> 2

    let temp;

    for (let i = 0; i < normalizedOffset; i++) {
        temp = arr[arr.length - 1];

        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }

        arr[0] = temp;
    }

    console.log(arr);
}

transformOnSite([1,3,5,7], 2); //[5,7,1,3]
transformOnSite([1,3,5,7,0], 2); //[7,0,1,3,5]
transformOnSite([1,3,5,7,0], -1); //[3,5,7,0,1]
transformOnSite([1,3,5,7], 9); //[7,1,3,5]