const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/solar", {
  useNewUrlParser: true,
});

const visitorSchema = new Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: "Planet" },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});

const planetSchema = new Schema({
  name: String,
  system: { type: Schema.Types.ObjectId, ref: "SolarSystem" },
  visitors: [{ type: Schema.Types.ObjectId, ref: "Visitor" }],
});

const solarSystemSchema = new Schema({
  planets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
  starName: String,
});

const Visitor = mongoose.model("Visitor", visitorSchema);
const Planet = mongoose.model("Planet", planetSchema);
const SolarSystem = mongoose.model("SolarSystem", solarSystemSchema);
let s1 = new SolarSystem({
  planets: [],
  starName: "Sun",
});

let p1 = new Planet({
  name: "Earth",
  system: s1,
  visitors: [],
});

let v1 = new Visitor({
  name: "John Doe",
  homePlanet: p1,
  visitedPlanets: [],
});
/* s1.planets.push(p1);
p1.visitors.push(v1);
v1.visitedPlanets.push(p1);
s1.save();
 p1.save();
v1.save(); */
Planet.find({})
  .populate("visitors")
  .then((visit) => {
    console.log(visit);
  });
Planet.find({})
  .populate("visitors")
  .then((visit) => {
    visit.forEach((v) => console.log(v));
  });
SolarSystem.find({})
  .populate({
    path: "planets",
    populate: {
      path: "visitors",
    },
  })
  .then((v) => {
    console.log(v);
  });
