function mergeSort(arr, lb = 0, rb = arr.length - 1) {
    const center = Math.floor((lb + rb) / 2);

    if (lb < rb) {
        mergeSort(arr, lb, center);
        mergeSort(arr, center + 1, rb);
        merge(arr, lb, center, rb);
    }
}

function merge(arr, lb, center, rb) {
    let temp = [];
    let i = lb, j = center + 1;

    while (i <= center && j <= rb) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i++])
        } else {
            temp.push(arr[j++])
        }
    }
    
    for (; i <= center; i++) {
        temp.push(arr[i]);
    }

    for (; j <= rb; j++) {
        temp.push(arr[j]);
    }

    for (let i = 0; i < temp.length; i++) {
        arr[lb + i] = temp[i];
    }

    console.log(`arr ${arr}, lb ${lb}, center ${center}, rb ${rb}`)
}

mergeSort([7,3,8,2,4,0,13,9,1,2]);