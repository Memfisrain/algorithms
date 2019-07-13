function moveZerosToEnd(arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] !== 0) {
            continue;
        }

        for (let j = i; j < arr.length - 1; j++) {
            const temp = arr[j];
            arr[j] = arr[j+1];
            arr[j + 1] = temp;
        }
    }
}

function moveZerosToEndLinear(arr) {
    let ind;

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i] && ind === undefined) {
            ind = i;
        } else if (arr[i] && ind !== undefined) {
            arr[ind] = arr[i];
            arr[i] = 0;
            ind++;
        }
    }

    console.log(arr);
}

moveZerosToEndLinear([1,0,4]) // 1,4,0
moveZerosToEndLinear([0,1,2]) // 1,2,0
moveZerosToEndLinear([0,2,3,0]) // 2,3,0,0
moveZerosToEndLinear([1,2,0,7,3,4,0]) // 1,2,7,3,4,0

function traverseTree(node, arr = []) {
    const queue = [node];

    while (queue.length) {
        const currentNode = queue.shift();

        arr.push(currentNode.value);

        for (let i = 0; i < currentNode.children.length; i++) {
            queue.push(currentNode.children[i]);
        }
    }

    return arr;
}


const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 4,
                    children: [
                        {
                            value: 7,
                            children: [
                                {
                                    value: 8,
                                    children: []
                                },
                                {
                                    value: 9,
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 5,
                    children: []
                }
            ]
        },
        {
            value: 3,
            children: [
                {
                    value: 6,
                    children: []
                }
            ]
        }
    ]
}
console.log('-------------')
console.log(traverseTree(tree));

function sortOddsElements(arr) {
    const step = 2;
    const start = 0;

    for (let i = start; i < arr.length; i += step) {
        const curr = arr[i];

        for (let j = i - step; j >= start && arr[j] > curr; j -= step) {
            arr[j + step] = arr[j];
            arr[j] = curr;
        }
    }

    console.log(arr);
}


function pathToProperty(obj, path = '', paths = []) {
    for (let key in obj) {
        const value = obj[key];

        if (typeof value !== 'object') {
            paths.push(path ? path + '.' + key : key);
        } else {
            pathToProperty(value, path ? path + '.' + key : key, paths);
        }
    }

    return paths;
}

function anagramma(str1 = '', str2 = '') {
    if (str1.length !== str2.length) {
        return false;
    }

    const charsMap = {};

    for (let i = 0; i < str1.length; i++) {
        const char1 = str1[i];
        const char2 = str2[i];

        charsMap[char1] = (charsMap[char1] || 0) + 1;
        charsMap[char2] = (charsMap[char2] || 0) - 1;
    }

    return Object
        .keys(charsMap)
        .every(key => charsMap[key] === 0);
}

anagramma('кабан', 'банкh');


function sortAnagramas(arr) {
    for (let i = 1; i < arr.length; i++) {
        const curr = arr[i];

        let j = i - 1;

        while (j >= 0 && !anagramma(curr, arr[j])) {
            j--;
        }

        let k = i - 1;

        while (j >= 0 && k > j) {
            arr[k+1] = arr[k];
            arr[k] = curr;
            k--;
        }
    }
}

const arr = ['hei','car','john','rac','oe', 'eih','njoh','xe']; // ['hei', 'eih', 'car', 'rac', 'john', 'njoh', 'oe', 'xe']
// hei, car, rac, john, oe, eih, njoh, xe
// hei, eih, rac, john, oe, car, njoh, xe
// hei, eih, rac, john, njoh, oe, car, xe

sortAnagramas(arr);
console.log(arr);

moveZerosToEnd([1,0,4]) // 1,4,0
moveZerosToEnd([0,1,2]) // 1,2,0
moveZerosToEnd([0,2,3,0]) // 2,3,0,0
moveZerosToEnd([1,2,0,7,3,4,0]) // 1,2,7,3,4,0

sortOddsElements([5,4,3,2,1]) // [1,4,3,2,5]

const obj = {
    prop1: 5,
    user: {
        name: 'John',
        age: 25,
    },
    MainService: [
        {
            Id: "733",
            Name: "service",
            MainService: [
                {
                    Id: "238",
                    Name: "service 1",
                    Service: [
                        {
                            Id: "145",
                            Name: "Service 2"
                        }
                    ]
                }
            ]
        }
    ]
};

const path = [];
pathToProperty(obj, '', path);

console.log(path);