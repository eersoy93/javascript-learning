"use strict";

export default class Person {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  get getName() {
    return this.name;
  }

  get getAge() {
    return this.age;
  }

  get getSalary() {
    return this.salary;
  }

  /**
    * @param {string} name
    */
  set setName(name) {
    this.name = name;
  }

  /**
    * @param {number} age
    */
  set setAge(age) {
    this.age = age;
  }

  /**
    * @param {number} salary
    */
  set setSalary(salary) {
    this.salary = salary;
  }
}
