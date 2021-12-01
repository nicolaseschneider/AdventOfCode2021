import fs from "fs";
const text = fs.readFileSync("./input.txt").toString('utf-8');

const calcWindow = (array, index) => {
    if (index === 0 || index === array.length - 1) {
        throw new Error('Out of Bounds: ' + index);
    }
    const currentDepth = array[index];
    const previousDepth = array[index - 1];
    const nextDepth = array[index + 1];
    return currentDepth + previousDepth + nextDepth;
}

const calcDepthChanges = (input) => {
    const array = input.split('\n').map(Number);
    let numIncreases = 0;
    for (let i = 1; i < array.length - 1; i++) {
        const currentDepth = array[i];
        const prevDepth = array[i - 1]
        if (currentDepth > prevDepth) {
            numIncreases += 1;
        }
    }
    return numIncreases;
}

const calcDepthWindowChanges = (input) => {
    const array = input.split('\n').map(Number);
    let numIncreases = 0;
    for (let i = 2; i < array.length - 1; i++) {
        const currentDepth = calcWindow(array, i);
        const prevDepth = calcWindow(array, i-1);
        if (currentDepth > prevDepth) {
            numIncreases += 1;
        }
    }
    return numIncreases;
}
console.log(calcDepthChanges(text));
console.log(calcDepthWindowChanges(text));