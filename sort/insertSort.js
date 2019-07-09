function insertSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		const curr = arr[i];

		for (let j = i - 1; j >= 0 && curr < arr[j]; j--) {
			arr[j + 1] = arr[j];
			arr[j] = curr;
		}
	}
}

function setMin(arr) {
	let min = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}

	arr[0] = min;
}

function insertSortGuarded(arr) {
	const first = arr[0];

	setMin(arr);

	for (let i = 1; i < arr.length; i++) {
		const curr = arr[i];

		for (let j = i - 1; arr[j] > curr; j--) {
			arr[j + 1] = arr[j];
			arr[j] = curr;
		}
	}

	for (let i = 1; i < arr.length && first > arr[i]; i++) {
		arr[i - 1] = arr[i]
		arr[i] = first;
	} 
}


const arr = [3,6,2,1,4,9,13,5,6,9,22,-5,0,99,1];

//insertSort(arr);
insertSortGuarded(arr);

console.log(arr);

// AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
// A4B3C2XYZD4E3F3A6B28
// function compress() {}






