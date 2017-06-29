const express = require('express');
const router  = express.Router();

const CelebrityModel = require("../models/celebrity-model.js");

router.get("/celebrities/:id", (req, res, next) =>{
var id = req.params.id;

  CelebrityModel.findById(
    id,
    (err, CelebrityResults) => {
    if (err) {
      next(err);
      return;
    }
    res.render("celebrities/show.ejs", {
      CelebrityArray : CelebrityResults
    });
  });
});


router.get("/celebrities/new", (req, res, next) => {
  if (err) {
    next(err);
    return;
  }
  res.render("celebrities/new.ejs", {
    CelebrityArray : CelebrityResults
  });
});

router.post("/celebrities", (req, res, next) => {
  const theCeleb = new CelebrityModel({
    name: req.body.celebrityName,
    occupation: req.body.celebrityOccupation,
    catchPhrase: req.body.celebrityCatchPhrase,
  });

  theCeleb.save((err) => {
  if (err) {
    next(err);
    return;
  }
    res.redirect("/celebrities");
});
});


module.exports = router;
