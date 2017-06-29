const express = require('express');
const router  = express.Router();

const CelebrityModel = require("../models/celebrity-model.js");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", (req, res, next) =>{
  CelebrityModel.find((err, CelebrityResults) => {
    if (err) {
      next(err);
      return;
    }
    res.render("celebrities/celeb-index.ejs", {
      CelebrityArray : CelebrityResults
    });
  });
});



module.exports = router;
