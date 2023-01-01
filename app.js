const express = require("express");
const bodyParser = require("body-parser");

//Own imports
const placesRoutes = require("./routes/places-routes");
const HttpError = require("./models/http-error");

const app = express();

//parsing the body. this should be done before the requests reaches the route
app.use(bodyParser.json());

//Registering placesRoutes as a middleware with a filter /api/places so that all the routes with this specific middleware should start with /api/places...
app.use("/api/places", placesRoutes);

//This middleware is registered for requests that don't send a response back or unsupported routes. We are throwing an error in this middleware so the error will be caught in the special middleware with the error parameter
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

//Express will apply this middleware on every request. If you provide 3 parameters to any middle ware, Express will understand it as a special middleware for error handling
app.use((error, req, res, next) => {
  //Checking if the response and the headers attached to it are sent
  if (res.headerSend) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unkown error has occured" });
});

app.listen(5000, () => {
  console.log("Server up and running on port 5000");
});
