const express = require("express");
const bodyParser = require("body-parser");

//Importing the controller functions
const placesControllers = require("../controllers/places-controller");

//The express. Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests
const router = express.Router();

//This route will be directed to /api/places/:pid as it is being filtered in the app.js >> We will not call the controller functions, only point at the function, the function will be called by express when the request is sent
router.get("/:pid", placesControllers.getPlaceById);

//This route will be directed to /api/places/user/:uid as it is being filtered in the app.js
router.get("/user/:uid", placesControllers.getPlacesByUserId);

//This route will be directed to /api/places as it is being filtered in the app.js
router.post("/", placesControllers.createPlace);

//This route will be directed to /api/places/:pid as it is being filtered in the app.js but with a patch request
router.patch("/:pid", placesControllers.updatePlace);

//This route will be directed to /api/places/:pid as it is being filtered in the app.js but with a delete request
router.patch("/:pid", placesControllers.deletePlace);

//exporting a module in node js
module.exports = router;
