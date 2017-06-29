const Celebrity = require ("../models/celebrity-model.js");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/movies");

const CelebrityArray = [
  {
  name: "Matt Damon",
  occupation: "Actor",
  catchPhrase: "I am gonna have to science the shit out of this."
},
{
  name: "Denzel Washington",
  occupation: "Actor",
  catchPhrase: "Acting is just a way of making a living, the family is life."
},
{
  name: "Carlos Mencia",
  occupation: "Comedian",
  catchPhrase: "If you ain't laughing, you ain't living, baby."
},
];

Celebrity.create(
  CelebrityArray,           //1st arg = array of product info objects
  (err, CelebrityResults) => {  //2nd arg = callback!
      if (err) {
        console.log ("Uhoh, something went wrong!");
        return;
      }
      CelebrityResults.forEach((oneCeleb) => {
        console.log("Awesome! You added a new Celebrity! " + oneCeleb.name);
      });
  }
);
