const express = require("express");
const bodyParser = require("body-parser");

//The express. Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("GET Request in PLaces");

  res.json({ message: "It works" });
});

//exporting a module in node js
module.exports = router;
