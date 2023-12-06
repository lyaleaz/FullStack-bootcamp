class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }
}
class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(null, startYear);
    this.salary = salary;
    this.name = "Professor " + name;
    this.courses = {};
  }
  addCourse(course) {
    if (this.courses[course]) {
      return this.courses[course]++;
    }
    this.courses[course] = 1;
  }
  giveGrade(student, courseName, grade) {
    student.receiveGrade(courseName, grade);
  }
}
class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }

  //method overriding!
  addCourse(course) {
    if (this.courses.indexOf(course) == -1) {
      super.addCourse(course);
    }
  }
}
/* const t1 = new Teacher("Cassandra", 2002, 40000);
console.log(t1.name); */

// Spot Check 3
const t1 = new Teacher("Cassandra", 2002, 40000);
t1.addCourse("Algebra II");
t1.addCourse("Algebra II");
t1.addCourse("Trigonometry");
console.log(t1.courses); //should print {Algebra II: 2, Trigonometry: 1}
