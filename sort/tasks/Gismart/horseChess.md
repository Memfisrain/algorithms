Implement countHorseSteps function which accepts coords object as argument which consists of start and end. It should return the mininum number of steps required by Horse to reach end coordinate.

Every coordinate looks like {x: NUMBER, y: NUMBER};
Chesse field could be any size (by default 8x8);

Example:

const FIELD = {x: 8, y: 8};

countHorseSteps({ start: {x: 4, y: 4}, end: {x: 7, y: 7} }); -> 2
countHorseSteps({ start: {x: 8, y: 7}, end: {x: 1, y: 7} }); -> 5