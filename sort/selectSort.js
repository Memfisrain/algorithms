function selectSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		const curr = arr[i];
		let min = curr;
		let minIndex = i;

		for(let j = i + 1; j < arr.length; j++) {
			if (arr[j].value < min.value) {
				min = arr[j];
				minIndex = j;
			}
		}

		arr[i] = arr[minIndex];
		arr[minIndex] = curr;
	}
}

const arr = [3,6,2,1,4,9,13,5,6,9,22,-5,0,99,1,33];

const makeComplexArr = arr => arr.map((value,index) => ({ id: index, value }))
const complexArr = makeComplexArr(arr);

selectSort(complexArr);

console.log(complexArr);





