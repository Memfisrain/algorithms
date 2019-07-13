Implement checkBrackets function which accepts array and offset and moves all elements of the array to offset positions right.

Examples:

transform([1,3,5,7], 2); -> [5,7,1,3]
transform([1,3,5,7,0], 2); -> [7,0,1,3,5]
transform([1,3,5,7,0], -1); -> [3,5,7,0,1]
transform([1,3,5,7], 9); -> [7,1,3,5]

Note!
It's better to implement this using two different approaches:
1) Slower, but memory free
2) Quick, but with additional memory