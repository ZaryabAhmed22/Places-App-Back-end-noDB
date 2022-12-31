const express = require("express");
const bodyParser = require("body-parser");

//Own imports
const placesRoutes = require("./routes/places-routes");

const app = express();

//app.use("bo");

//Registering placesRoutes as a middleware with a filter /api/places so that all the routes with this specific middleware should start with /api/places...
app.use("/api/places", placesRoutes);

app.use(placesRoutes);

app.listen(5000, () => {
  console.log("Server up and running on port 5000");
});
