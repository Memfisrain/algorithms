function compress(str) {
    let res = '';
    let ch = str[0];
    let ind = 0;
    let i = 1;

    do {
        const curr = str[i];

        if (curr !== ch) {
            res += ch + (i - ind === 1 ? '' : i - ind);
            ch = curr;
            ind = i;
        }

        i++;
    } while (i <= str.length);

    console.log(res);
}


compress('AAAABBBCHDDJUEEI'); // A4B3CHD2JUE2I