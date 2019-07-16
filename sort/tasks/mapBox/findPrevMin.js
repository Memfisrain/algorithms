function findPrevMin(binaryTree) {
    let tree = binaryTree;
    let min = tree.value;

    while (tree.left) {
        min = tree.value;
        tree = tree.left;
    }

    console.log(min)
}

const binaryTree = {
    value: 10,
    left: {
        value: 8,
        left: {
            value: 6,
            left: {
                value: 4,
                left: {
                    value: 2,
                    left: {
                        value: 0,
                    }
                },
                right: {
                    value: 3,
                }
            }
        },
        right: {
            value: 10
        }
    }
};

console.log(findPrevMin(binaryTree));