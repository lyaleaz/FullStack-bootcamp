/* class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
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
}
const s1 = new Student("Ronda", 2017);
console.log(s1.name); //prints "Ronda"

s1.addCourse("Algebra II");
console.log(s1.courses); //prints ["Algebra II"]
 */
