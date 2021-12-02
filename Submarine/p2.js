import fs from "fs"
const text = fs.readFileSync("./inputs/inputD2.txt").toString('utf-8')

const parseInput = (inputStr) => {
    return inputStr.split('\n').map((line) => {
        const [direction, amt] = line.split(' ')
        return { direction, amt }
    })
}

const calcPath = (input) => {
    const path = parseInput(input)
    let depth = 0;
    let dist = 0;

    path.forEach((move) => {
        switch (move.direction) {
            case 'forward':
                dist += Number(move.amt)
                break
            case 'down':
                depth += Number(move.amt)
                break
            case 'up':
                depth -= Number(move.amt)
                break
            default:
                break
        }
    })
    
    return depth * dist
}


const calcPartTwo = (input) => {
    const path = parseInput(input)
    let depth = 0
    let dist = 0
    let aim = 0

    path.forEach((move) => {
        switch (move.direction) {
            case 'forward':
                dist += Number(move.amt)
                depth += Number(move.amt) * (aim)
                break
            case 'down':
                aim += Number(move.amt)
                break
            case 'up':
                aim -= Number(move.amt)
                break
            default:
                break
        }
    })
    return depth * dist
}
console.log(calcPath(text))
console.log(calcPartTwo(text))