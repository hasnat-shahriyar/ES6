/*
Classes in JavaScript provide a way to create reusable, blueprint-like structures for objects. They were introduced in ECMAScript 6 (ES6) and are a significant improvement over traditional constructor functions. Here's an overview of classes in JavaScript:
*/

// Creating a Class:
// To create a class in JavaScript, you use the `class` keyword, followed by the name of the class and a class body that contains the properties and methods of the class.

// Javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
// In this example, we've defined a `Person` class with a constructor that sets the `firstName` and `lastName` properties and a `getFullName` method that returns the full name of the person.

// Creating Instances (Objects):
// To create an instance of a class, you use the `new` keyword and call the class as if it were a function.

// Javascript
const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");

// In this code, we create two `Person` objects, `person1` and `person2`.

// Class Methods and Properties:

// Classes can have methods and properties. Methods are functions defined inside the class, and properties are variables defined inside the constructor.

// Javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  static createSquare(side) {
    return new Rectangle(side, side);
  }
}

const rect = new Rectangle(5, 10);
const square = Rectangle.createSquare(4);

console.log(rect.getArea()); // Output: 50
console.log(square.getArea()); // Output: 16

/*
In this example, we have a `Rectangle` class with a regular method (`getArea`) and a static method (`createSquare`). Static methods are called on the class itself and are not accessible from instances.
*/

// Inheritance (Extending Classes):
// You can create a subclass that inherits the properties and methods of a parent class using the `extends` keyword.

// Javascript
class Student extends Person {
  constructor(firstName, lastName, studentId) {
    super(firstName, lastName); // Call the parent class constructor
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.getFullName()} is studying.`);
  }
}

// In this code, the `Student` class extends the `Person` class, inheriting its properties and methods. The `super` keyword is used to call the parent class constructor.

// Class Syntax in Modern JavaScript:

/*
Classes provide a cleaner and more structured way to work with objects in JavaScript. They are commonly used in modern JavaScript development, especially when working with libraries, frameworks, and object-oriented programming principles. Additionally, classes are frequently used with other ES6 features, like inheritance, modules, and arrow functions, to build robust and maintainable code.
*/