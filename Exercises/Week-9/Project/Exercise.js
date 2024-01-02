const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
