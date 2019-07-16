Implement findPrevMin function which accepts binary search tree and returns second minimal element.

For example:

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

findPrevMin(binaryTree); -> 2;