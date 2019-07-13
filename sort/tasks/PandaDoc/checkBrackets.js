function checkBrackets(brackets) {
    const bracketsHash = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    const bracketsStack = [];

    for (let i = 0; i < brackets.length; i++) {
        const closedBracket = bracketsHash[brackets[i]];

        if (closedBracket) {
            bracketsStack.push(closedBracket);
        } else if (bracketsStack.pop() !== brackets[i]) {
            return false;
        }
    }

    return !bracketsStack.length;
}

console.log(checkBrackets('()')); //-> true
console.log(checkBrackets('([)]')); //-> false
console.log(checkBrackets(')[]')); //-> false
console.log(checkBrackets('[({[]})]')); //-> true