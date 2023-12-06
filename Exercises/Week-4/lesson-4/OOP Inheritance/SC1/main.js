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
class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(null, startYear);
    this.salary = salary;
    this.name = "Professor " + name;
  }
}

/* class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(name, startYear);
    this.grade = [];
    this.salary = salary;
  }
  giveGrade(student, course, grade) {
    student.receiveGrade(course, grade);
  }
} */

/* const s1 = new Student("Ronda", 2017);
console.log(s1.name); //prints "Ronda"

s1.addCourse("Algebra II");
console.log(s1.courses); //prints ["Algebra II"] */
/* const s1 = new Student("Ronda", 2017);
const t1 = new Teacher("Cassandra", 2002, 40000);

t1.giveGrade(s1, "Algebra II", 82);
const firstGrade = s1.grades[0];

console.log(
  `${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`
); */
//above should print "Ronda received an 82 in Algebra II"

const s2 = new Student("Ronda", 2017);
console.log(s2 instanceof Student); //prints true

const s1 = new Student("Ronda", 2017);
const t1 = new Teacher("Cassandra", 2002, 40000);
const p1 = new Person("Anon", 1999);

console.log(s1 instanceof Person);
console.log(t1 instanceof Teacher);
console.log(t1 instanceof Person);
console.log(s1 instanceof Teacher);
console.log(t1 instanceof Student);
console.log(p1 instanceof Person);
console.log(p1 instanceof Student);
console.log(p1 instanceof Teacher);
