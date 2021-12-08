import fs from "fs"
const textArray = fs.readFileSync("./inputs/inputD3.txt").toString('utf-8').split('\n')

// var b = parseInt( a, 2 ); converts binary string to an integer
const binaryDiagnostic = (inputArr) => {
    let epsilon = ''
    let gamma = ''
    for (let j = 0; j < inputArr[0].length; j++) {
        const count = [0,0]
        for (let i = 0; i < inputArr.length; i++) {
            const digit = Number(inputArr[i][j])
            count[digit] += 1;
        }
        if (count[0] >= count[1]) {
            gamma += 0
            epsilon += 1
        } else {
            gamma += 1
            epsilon += 0
        }
    }

    const gammaInt = parseInt(gamma, 2)
    const epsilonInt = parseInt(epsilon, 2)
    return gammaInt * epsilonInt

}

const oxygenRating = (array) => {
    let current = [...array];
    for (let j = 0; j < current[0].length; j++) {
        const counter = [[],[]]
        for (let i = 0; i < current.length; i++) {
            const bit = Number(current[i][j])
            counter[bit].push(current[i]);
        }
        if (counter[0].length > counter[1].length) {
            current = [...counter[0]]
        } else {
            current = [...counter[1]]
        }
    }
    return parseInt(current[0], 2)
}

const CO2Rating = (array) =>{
    let current = [...array];
    for (let j = 0; j < current[0].length; j++) {
        const counter = [[],[]]
        for (let i = 0; i < current.length; i++) {
            const bit = Number(current[i][j])
            counter[bit].push(current[i]);
        }
        if (current.length === 1) {
            return parseInt(current[0], 2)
        } else if (counter[0].length <= counter[1].length) {
            current = [...counter[0]]
        } else {
            current = [...counter[1]]
        }
    }
    return parseInt(current[0], 2)
}

const lifeSupportRating = (inputArr) => {

    return oxygenRating(inputArr) * CO2Rating(inputArr);
}

console.log(binaryDiagnostic(textArray))
console.log(lifeSupportRating(textArray))