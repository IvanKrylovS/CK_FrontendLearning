var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Task 1: одномерные массивы");
var array = Array(5);
for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(100 * Math.random());
}
console.log("До сортировки:");
console.log(array);
array = array.sort();
console.log("После сортировки: ");
console.log(array);
console.log("Медианное значение: " + array[Math.floor(array.length / 2)]);
console.log();
console.log("Task 1: двумерные массивы");
var matrix = [];
var rows = 5;
var cols = 5;
for (var i = 0; i < rows; i++) {
    var row = [];
    for (var j = 0; j < cols; j++) {
        var randomNum = Math.floor(Math.random() * 100) - 50;
        row.push(randomNum);
    }
    matrix.push(row);
}
var Index = /** @class */ (function () {
    function Index(row, column) {
        this.row = row;
        this.column = column;
    }
    Index.prototype.getRow = function () {
        return this.row;
    };
    Index.prototype.getColumn = function () {
        return this.column;
    };
    return Index;
}());
var before = new Index(0, 0);
var after = new Index(5, 5);
var sumOfNonZeroNumbers = 0;
for (var i = before.getRow(); i < after.getRow(); i++) {
    for (var j = before.getColumn(); j < after.getColumn(); j++) {
        if (matrix[i][j] != 0)
            sumOfNonZeroNumbers++;
    }
}
console.log(matrix);
console.log("количество ненулевых значений в матрице целых чисел в заданном отрезке от (0,0) до (5,5): " + sumOfNonZeroNumbers);
console.log();
console.log("Task 2: кортежи");
var myTuple = [10, "Ivan", 10];
console.log(myTuple);
function printMultiply() {
    console.log("Произведение чисел равно: " + myTuple[0] * myTuple[2]);
}
printMultiply();
console.log();
console.log("Task 3: enum");
var Vitamines;
(function (Vitamines) {
    Vitamines[Vitamines["A"] = 0] = "A";
    Vitamines[Vitamines["B3"] = 1] = "B3";
    Vitamines[Vitamines["B6"] = 2] = "B6";
    Vitamines[Vitamines["B12"] = 3] = "B12";
    Vitamines[Vitamines["D"] = 4] = "D";
    Vitamines[Vitamines["E"] = 5] = "E";
})(Vitamines || (Vitamines = {}));
console.log("Когда видите мало солнца пейте витамин - " + Vitamines[4]);
console.log();
console.log("Task 4:");
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printCreatePet(args) {
    console.log(args);
}
var cat = new Cat();
var dog = new Dog();
printCreatePet(cat);
printCreatePet(dog);
console.log();
console.log("Task 5:");
var models;
(function (models) {
    models[models["Lada"] = 0] = "Lada";
    models[models["BMW"] = 1] = "BMW";
    models[models["Reno"] = 2] = "Reno";
})(models || (models = {}));
var Car = /** @class */ (function () {
    function Car(nameModels) {
        this.model = nameModels;
    }
    return Car;
}());
var car = new Car(models[1]);
var carJSON = JSON.stringify(car);
console.log(carJSON);
