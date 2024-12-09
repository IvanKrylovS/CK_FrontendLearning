console.log("Task 1: одномерные массивы")
let array: number[] = Array(5)
for (let i: number = 0; i < array.length;i++) {
    array[i] = Math.floor(100 * Math.random())
}
console.log("До сортировки:")
console.log(array)
array = array.sort()
console.log("После сортировки: ")
console.log(array)
console.log("Медианное значение: " + array[Math.floor(array.length/2)])

console.log()
console.log("Task 1: двумерные массивы")
let matrix: number[][] = []
let rows: number = 5 
let cols: number = 5
for (let i: number = 0; i < rows; i++) {
    const row: number[] = [];
    for (let j: number = 0; j < cols; j++) {
        const randomNum = Math.floor(Math.random() * 100) - 50 ;
        row.push(randomNum);
    }
    matrix.push(row);
}

class Index {
    private row: number;
    private column: number
    constructor(row: number,column: number){
        this.row = row;
        this.column = column
    }
    getRow(): number {
        return this.row
    }
    getColumn(): number {
        return this.column
    }
} 

let before = new Index(0,0) 
let after = new Index(5,5)

let sumOfNonZeroNumbers: number = 0

for (let i: number = before.getRow(); i < after.getRow(); i++) {
    for (let j: number = before.getColumn(); j < after.getColumn(); j++) {
        if(matrix[i][j] != 0)
            sumOfNonZeroNumbers++
    }
}
console.log(matrix)
console.log("количество ненулевых значений в матрице целых чисел в заданном отрезке от (0,0) до (5,5): " + sumOfNonZeroNumbers)

console.log()
console.log("Task 2: кортежи")
let myTuple: [number,string,number] = [10,"Ivan",10]
console.log(myTuple)
function printMultiply(): void{
    console.log("Произведение чисел равно: " + myTuple[0] * myTuple[2]) 
}
printMultiply()
console.log()
console.log("Task 3: enum")

enum Vitamines {
    A, B3, B6, B12, D ,E
}

console.log("Когда видите мало солнца пейте витамин - "+ Vitamines[4])

console.log()
console.log("Task 4:")

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2; 
    speak() {
    return "Miyau!";
   }
}

function printCreatePet<T extends Pet>(args: T){
    console.log(args)
}

let cat = new Cat()
let dog = new Dog()

printCreatePet(cat)
printCreatePet(dog)

console.log()
console.log("Task 5:")

enum models {
    "Lada","BMW","Reno"
}

class Car{
    model: string
    constructor(nameModels: string){
        this.model = nameModels
    }
}

let car = new Car(models[1])
let carJSON = JSON.stringify(car)

console.log(carJSON)