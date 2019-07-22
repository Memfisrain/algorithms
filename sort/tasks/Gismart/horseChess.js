const FIELD_SIZE = {x: 8, y: 8};

const isEqual = (start,end) => start.x === end.x && start.y === end.y;

const AXIS = {
    X: 'x',
    Y: 'y'
};

const serializeStep = step => `${step.x}:${step.y}`;

const getAxisSteps = (position, axis) => {
    const secondAxis = axis === AXIS.X ? AXIS.Y : AXIS.X;

    return [
        {[axis]: position[axis] + 2, [secondAxis]: position[secondAxis] + 1},
        {[axis]: position[axis] + 2, [secondAxis]: position[secondAxis] - 1},
        {[axis]: position[axis] - 2, [secondAxis]: position[secondAxis] + 1},
        {[axis]: position[axis] - 2, [secondAxis]: position[secondAxis] - 1},
    ];
};

const isNewStep = paths => step =>
    !paths.hasOwnProperty(serializeStep(step));

const isStepOnBoard = step =>
    step.x > 0 && step.x <= FIELD_SIZE.x &&
    step.y > 0 && step.y <= FIELD_SIZE.y;

const filterNextSteps = (steps, paths) =>
    steps
        .filter(isNewStep(paths))
        .filter(isStepOnBoard);

const getNextSteps = (position, paths) => {
    const steps = [
        ...getAxisSteps(position, AXIS.X),
        ...getAxisSteps(position, AXIS.Y),
    ];

    return filterNextSteps(steps, paths);
};

function countHorseSteps(coords) {
    const { start, end } = coords;
    const queue = [start]
    const paths = {[serializeStep(start)]: 0};


    while (queue.length) {
        const currentPosition = queue.shift();
        const currentPositionSerialized = serializeStep(currentPosition);
        const currentPositionSteps = paths[currentPositionSerialized];
        
        if (isEqual(currentPosition, end)) {
           return currentPositionSteps;
        }

        const steps = getNextSteps(currentPosition, paths);

        for (let i = 0; i < steps.length; i++) {
            queue.push(steps[i]);
            paths[serializeStep(steps[i])] = currentPositionSteps + 1;
        }
    }
}

console.log(countHorseSteps({
    start: { x: 8, y: 7 },
    end: { x: 1, y: 7 }
}));