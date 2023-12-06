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

  addCourse(course) {
    if (this.courses.indexOf(course) == -1) {
      super.addCourse(course);
    }
  }
}
class TeachingAssistant extends Teacher {
  constructor(name, startYear, salary) {
    super(name, startYear, salary);
  }
}
const ta1 = new TeachingAssistant("Brandon", 2014, 20000);
ta1.addCourse("General Relativity");
console.log(ta1);

const ta2 = new TeachingAssistant("Brandon", 2014, 20000);
console.log(ta2.toString());
