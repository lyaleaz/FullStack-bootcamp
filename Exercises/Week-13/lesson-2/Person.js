"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, height, weight, hobbies) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.hobbies = hobbies;
    }
    Person.prototype.grow = function () {
        this.age++;
    };
    Person.prototype.loseWeight = function (amount) {
        this.weight -= amount;
    };
    Person.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    Person.prototype.getHobbiesNames = function () {
        return this.hobbies.map(function (hobby) { return hobby.hobbyName; });
    };
    return Person;
}());
exports.Person = Person;
