use("example");
const newData = "newData";

db.firstCollection.find({});
db.firstCollection.find(
  //query starts here
  {
    //filter starts here
    salary: {
      $gt: 1200,
    },
  }, //filter ends here
  {
    //projection starts here
    name: 1,
    _id: 0,
  } //projection ends here
);
/*db.firstCollection.insert({
  currentBalance: 4200,
  accountDetails: {
    fullname: "Douglas Adams",
    accountNumber: 800112338,
  },
});

db.firstCollection.insert({ name: "Louise", salary: 1200 });
db.firstCollection.insert({ name: "Rayna", salary: 2300 });
db.firstCollection.insert({ name: "Soren", salary: 1500 });
db.firstCollection.insert({ name: "Loreli", salary: 800 });
db.firstCollection.insert({ name: "Milo", salary: 950 });
db.firstCollection.insert({ name: "Brendon", salary: 1100 });
db.firstCollection.find({
  name: "Milo",
});
db.firstCollection.find({
  salary: {
    $gt: 1200,
  },
});
db.firstCollection.find(
  //query starts here
  {
    //filter starts here
    salary: {
      $gt: 1200,
    },
  }, //filter ends here
  {
    //projection starts here
    name: 1,
    _id: 0,
  } //projection ends here
); //query ends here
db.firstCollection.find(
  {
    name: "Razu",
  },
  {
    "hometown.city": "1",
  }
); 
db.firstCollection.update(
  {
    name: "Milo", //filter
  },
  {
    lastName: "Shakers", //update
  }
);
db.firstCollection.find({
  name: "Shakers",
});
db.firstCollection.update({ name: "Loreli" }, { $set: { salary: 1050 } });
db.firstCollection.remove({
  name: "Rayna",
});
db.firstCollection.find({});
db.firstCollection.update(
  { name: "Razu" },
  {
    $push: {
      hobbies: "Razu-Ball",
    },
  }
);

db.firstCollection.update(
  { name: "Soren" },
  {
    $set: {
      dreams: [],
    },
  }
);

db.firstCollection.update(
  { name: "Soren" },
  {
    $push: {
      dreams: {
        $each: ["Being like Razu", "Breaking the glass floor"],
      },
    },
  }
);
db.firstCollection.update(
  { name: "Soren" },
  {
    $pull: {
      dreams: "Being like Razu",
    },
  }
);
db.firstCollection.find({});
 */
/* db.firstCollection.find({
  $and: [{ salary: { $gt: 1000 } }, { salary: { $lt: 1500 } }],
});
db.firstCollection.insert({
  name: "Spore",
  hobbies: ["Running", "Hip Hop", "Basketball", "Soccer"],
});
db.firstCollection.insert({
  name: "Daniel",
  hobbies: ["Hip Hop", "Ballet", "Salsa", "Running"],
});
db.firstCollection.insert({
  name: "Beckie",
  hobbies: ["Reading", "Running", "Hip Hop", "Writing", "Debate", "Philosophy"],
});
db.firstCollection.insert({
  name: "Dugg",
  hobbies: ["Philosophy", "Psychology"],
});
db.firstCollection.find({
  hobbies: "Philosophy",
});
db.firstCollection.count({
  salary: {
    $gt: 1200,
  },
});
db.firstCollection
  .find({
    salary: {
      $gt: 200,
    },
  })
  .limit(2);
db.firstCollection.find({}).sort({ salary: -1 }).limit(3);
db.firstCollection.aggregate([
  { $group: { _id: null, totalSalaries: { $sum: "$salary" } } },
]);
db.firstCollection.remove({});
db.firstCollection.insert({ name: "Louise", dept: "Finance", salary: 1200 });
db.firstCollection.insert({ name: "Rayna", dept: "R&D", salary: 2300 });
db.firstCollection.insert({ name: "Soren", dept: "Finance", salary: 1500 });
db.firstCollection.insert({ name: "Loreli", dept: "Sales", salary: 800 });
db.firstCollection.insert({ name: "Milo", dept: "Sales", salary: 950 });
db.firstCollection.insert({ name: "Brendon", dept: "Finance", salary: 1100 });
db.firstCollection.aggregate([
  { $group: { _id: "$dept", totalSalaries: { $sum: "$salary" } } },
]);
db.firstCollection.aggregate([
  { $match: { currentEmployee: true } },
  {
    $group: {
      _id: "$dept",
      totalSalaries: { $sum: "$salary" },
    },
  },
  { $sort: { totalSalaries: -1 } },
]);
*/
