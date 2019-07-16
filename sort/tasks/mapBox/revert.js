function revertSubstr(arr, start, end) {
    if (start !== null && end !== null) {
        const center = Math.ceil((end - start) / 2);

        for (let i = 0; i < center; i++) {
            const temp = arr[start + i];
            arr[start + i] = arr[end - i];
            arr[end - i] = temp;
        }
    }
}

function revert(str) {
    if (!str.length) {
        console.log('');
        return;
    }

    const arr = str.split('');

    let start = null;
    let end = null;

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];

        if (curr !== '_') {
            start = start === null ? i : start;
            end = i;
        } else {
            revertSubstr(arr, start, end);
            start = null;
            end = null;
        }
    }

    revertSubstr(arr, start, end);

    console.log(arr.join(''));
}

revert('_a__'); // '_a__'
revert('_a__b'); // '_a__b'
revert('aaab'); // 'baaa'
revert('_____'); // '_____'
revert('ab__b'); // 'ba__b'
revert('_bcd_'); // '_dcb_'
revert(''); // ''
revert('ab__bc'); // 'ba__cb'