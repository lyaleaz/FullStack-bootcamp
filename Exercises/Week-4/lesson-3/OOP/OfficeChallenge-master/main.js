class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }

  work(office) {
    for (let i = 1; i <= 10; i++) {
      const newDocument = new Document(`Employee${i}`);
      office.documents.push(newDocument);
    }
  }
}
class Manager {
  constructor(name) {
    this.employees = [];
    this.name = name;
  }
  hireEmployee(name) {
    const NewEmp = new Employee(name);
    this.employees.push(NewEmp);
  }
  askEmployeesToWork(office) {
    this.employees.forEach((Employee) => {
      Employee.work(office);
    });
  }
}

class Cleaner {
  constructor(name) {
    this.name = name;
  }
  clean() {
    console.log("Clean");
  }
}

class Office {
  constructor() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
  }
  hireCleaner(newName) {
    const newCleaners = new Cleaner(newName);
    this.cleaners.push(newCleaners);
  }
  hireManager(newName) {
    const newManager = new Manager(newName);
    this.managers.push(newManager);
  }
  startWorkDay() {
    for (let i = 0; i < this.managers.length; i++) {
      this.managers[i].askEmployeesToWork(this);
    }

    for (let j = 0; j < this.cleaners.length; j++) {
      this.cleaners[j].clean();
    }
  }
}
