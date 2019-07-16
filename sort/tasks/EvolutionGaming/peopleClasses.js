function sortPeopleByClass(people) {
    return Object.entries(people)
        .map(([key, value]) => [key, transformClass(value)])
        .sort(peopleComparator)
        .map(([name]) => name)
}

function peopleComparator([firstName, firstClass], [secondName, secondClass]) {
    const size = Math.max(firstClass.length, secondClass.length);

    for (let i = 1; i <= size; i++) {
        const firstValue = classValues[firstClass[firstClass.length - i] || 'middle'];
        const secondValue = classValues[secondClass[secondClass.length - i] || 'middle'];

        if (firstValue !== secondValue) {
            return firstValue - secondValue;
        }
    }

    return firstName.localeCompare(secondName);
}

function transformClass(str) {
    return str.slice(0, -6).split('-');
}

const classValues = {
    lower: 3,
    middle: 2,
    upper: 1,
};

const people = {
    'John': 'lower-middle-middle-upper-lower class',
    'Yulia': 'upper-upper class',
    'Simon': 'middle-upper-upper class',
    'Akira': 'lower-lower-middle class',
    'Rich': 'middle-lower-upper-upper-upper class'
};

console.log(sortPeopleByClass(people)); // [Rich, Simon, Yulia, Akira, John]