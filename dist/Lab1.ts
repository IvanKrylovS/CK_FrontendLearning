
let multiply = (a: number, b: number): number => {
    return a * b
}
console.log(multiply(5,6))

const a: number = 23
let b: number = 25


type TimeSeason = string
let time: TimeSeason = "Зима"

interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: string;
}

const data: ToJsonStringify = {
    id: 4,
    e1: null,
    e2: null,
}

let dataJSON = JSON.stringify(data)
let dataObj = JSON.parse(dataJSON)
console.log(dataObj)
console.log(dataJSON)
   