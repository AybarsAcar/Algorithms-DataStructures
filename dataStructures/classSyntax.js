//creating a class
class Student {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.absence = 0;
    this.scores = [];
  }

  //adding a method to the class
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`
  }

  markLate(){
    this.absence ++;
    return `${this.firstName} ${this.lastName} has been late ${this.absence} times`;
  }

  addScore(newScore){
    this.scores.push(newScore);
  }

  calculateAverage(){
    let sum = this.scores.reduce(function(a, b){return a + b});
    return sum/this.scores.length;
  }

  static EnrollStudent(){
    return "enrolling"
  }
}

let student1 = new Student("Aybars", "Acar", 27);

console.log(student1);
console.log(student1.fullName());


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b){
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(1, 2);
const p2 = new Point(3, 5);

console.log(Point.distance(p1, p2));
