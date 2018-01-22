
var express = require("express");
var bodyParse = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");
var validator = require("express-validator");

var { Grade } = require("./grade.js");
app = express();
app.use(bodyParse.urlencoded({ extended: false }));

app.use(cors());
app.use(validator());
app.use(morgan('combined'));

const gradeIns = new Grade();

app.get("/grades", (req, res) => {
  console.log(req.body);
  res.send(gradeIns.read());
});

app.post("/grades", (req, res) => {
  req.assert("id", "id is required!").notEmpty();
  
  req.assert("grade","grade should be number!").notEmpty().isNumeric();

  var errors = req.validationErrors();
  if (errors) {
    res.json(errors);
  }
  else {
    gradeIns.add(req.body);
    res.send(gradeIns.read());
  }
  res.end();
});

app.delete("/grades", (req, res) => {
  req.assert("id", "id is required!").notEmpty();
  
  req.assert("grade","grade should be number!").notEmpty().isNumeric();

  var errors = req.validationErrors();
  if (errors) {
    res.json(errors);
  }
  else {
    gradeIns.delete(req.body.id);
    res.send(gradeIns.read());
  }
  res.end();

});

app.put('/grades', (req, res) => {
  gradeIns.update(req.body);
  return res.send(gradeIns.read());
});
app.listen(4000, () => {
  console.log('The server is running on 3000');
});