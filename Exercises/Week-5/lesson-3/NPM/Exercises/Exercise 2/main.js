/*
Exercise 2
Read the docs for the faker package, then do the following in the same ex.js file:
Install the package, require it, and create a function called makeHuman
The function should receive a number
Inside, you should create as many people using faker as the number received
Each person should have a name, an image URL (avatar), and a company name
Because faker uses random data, your result will be different, but it should be something like this:
*/ const faker = require("faker");
function makeHuman(number) {
  const people = [];
  for (let i = 0; i < number; i++) {
    const user = {
      name: faker.name.firstName() + " " + faker.name.lastName(),
      avatar: faker.image.avatar(),
      company: faker.company.name(),
    };
    people.push(user);
  }
  return people;
}
console.log(makeHuman(3));
