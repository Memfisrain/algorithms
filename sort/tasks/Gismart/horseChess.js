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


function countHorseSteps(coords, paths = {}, count = 0) {
    const { start, end } = coords;

    paths[serializeStep(start)] = true;


    if (isEqual(start, end)) {
        return count;
    }

    count++;

    const steps = getNextSteps(start, paths);

    let min;
    let curr;

    while (steps.length) {
        curr = countHorseSteps({start: steps.pop(), end }, paths, count);
        min = curr
            ? min
                ? Math.min(min, curr)
                : curr
            : min
                ?
                min : null;
    }

    return min
}


console.log(countHorseSteps({
    start: { x: 4, y: 4 },
    end: { x: 8, y: 6 }
}));
/*
Idea:

You have start and end coords

Check is coords the same
 Yes ? -> true
 No ? ->
    1) get next possible coords
    2) make sure previous step is excluded from possible coords
    3) call countHorseSteps recursively until start and end match

 */