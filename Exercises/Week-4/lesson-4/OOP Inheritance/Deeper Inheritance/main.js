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
  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
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

class TeachingAssistant extends Teacher {
  constructor(name, startYear, salary) {
    super(name, startYear, salary);
  }
}
const s1 = new Student("Ronda", 2017);
const ta1 = new TeachingAssistant("Brandon", 2014, 20000);

ta1.addCourse("General Relativity");
ta1.giveGrade(s1, "General Relativity", 91);

console.log(ta1.salary); //prints 20000
console.log(ta1.courses); //prints {"General Relativity": 1}
console.log(s1.grades); //prints [{course: "General Relativity", grade: 91}]
