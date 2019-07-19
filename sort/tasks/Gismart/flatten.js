function flatten(arr, res = []) {
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];

        if (Array.isArray(curr)) {
            flatten(curr, res);
        } else {
            res.push(curr)
        }
    }

    return res;
}


console.log(flatten([[[[[[[[1,2]],3,4]]],5,6]],7]));