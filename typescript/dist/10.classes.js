"use strict";
class Person {
    //   contsructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    //   methods
    introduce() {
        return `Hello I am ${this.name} and I am ${this.age} years old`;
    }
    //   Getter
    getName() {
        return this.name;
    }
    //   Setter
    setName(name) {
        this.name = name;
    }
}
class Employee {
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} work in ${this.department}`;
    }
}
let nahid = new Employee(143, "nahid hasan", "Engineerign");
console.log(nahid.getDetails());
class Manager extends Employee {
    constructor(id, name, department, teamSize) {
        super(id, name, department);
        this.teamSize = teamSize;
    }
    getTeamInfo() {
        return `${this.name} manages ${this.teamSize}`;
    }
}
