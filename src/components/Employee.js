// Employee.js

import Person from './Person';

class Employee extends Person {
    constructor(name, age, salary, title) {
      super(name, age); // Call the constructor of the superclass (Person)
      this.salary = salary;
      this.title = title;
    }
  
    getSalary() {
      return this.salary;
    }
  
    setTitle(title) {
      this.title = title;
    }
  
    getTitle() {
      return this.title;
    }
  }
  
  export default Employee;
  