
function increment(size) {
	let i = -1;
	const inc = [];

	do {
		if (++i % 2) { // нечетное
			inc[i] = 8 * Math.pow(2, i) - 6 * Math.pow(2, (i + 1) / 2) + 1;
		} else { // четное
			inc[i] = 9 * Math.pow(2, i) - 9 * Math.pow(2, i / 2) + 1;
		}
	} while (inc[i] * 3 < size)

	return inc;
}

function shellSort(arr) {
	const inc = increment(arr.length);
	let n = inc.pop();

	while (inc.length) {
		n = inc.pop();

		for (let i = n; i < arr.length; i += 1) {
			const curr = arr[i]; // 2; i = 2
	
			for (let j = i - n; j >= 0 && arr[j] > curr; j -= n) {
				arr[j + n] = arr[j];
				arr[j] = curr;
			}
		}
	}
}

const arr = [3,6,2,1,4,9,13,5,6,9,22,-5,0,99,1,33];

shellSort(arr);

console.log(arr);





