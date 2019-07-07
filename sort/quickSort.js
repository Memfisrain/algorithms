function quickSort(arr) {
	const middle = Math.floor(arr.length / 2);
	const nominal = arr[middle];

	const left = [];
	const right = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < nominal) {
			left.push(arr[i]);
		} else if (arr[i] >= nominal && i !== middle) {
			right.push(arr[i]);
		}
	}

	return [
		...left.length > 1 ? quickSort(left) : left,
		nominal,
		...right.length > 1 ? quickSort(right) : right,
	];
}

function quickSortBest(arr, from = 0, to = arr.length - 1) {
	const nominalIndex = Math.floor((to + 1 - from) / 2 + from) ; // 2
	const nominal = arr[nominalIndex]; // 2

	let i = from; // 0
	let j = to;  // 3

	do {
		while (arr[i] < nominal) {
			i++;
		}

		while (arr[j] > nominal) {
			j--;
		}

		if (i <= j) {
			const temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
			i++; // 2
			j--; // 1
		}
	} while (i <= j)

	// i = 2; j = 1;
	// left part
	if (j > from) {
		quickSortBest(arr, from, j)
	}

	// right part
	if (i < to) {
		quickSortBest(arr, i, to);
	}
}


const arr = [3,6,2,1,4,9,13,5,6,9,22,-5,0,99,1];

quickSortBest(arr);

console.log(arr);






