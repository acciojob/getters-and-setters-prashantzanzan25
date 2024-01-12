class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(newAge) {
    this._age = newAge;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage:
// const john = new Student("John Doe", 20);
// john.study(); // Output: John Doe is studying

// const mary = new Teacher("Mary Smith", 35);
// mary.teach(); // Output: Mary Smith is teaching
