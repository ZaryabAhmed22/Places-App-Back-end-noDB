const express = require("express");
const bodyParser = require("body-parser");

//The express. Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests
const router = express.Router();

//Setting up dummy data
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    //   imageURL:
    //     "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },

  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    //   imageURL:
    //     "https://images.unsplash.com/photo-1528291151377-165f5107c82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

//This route will be directed to /api/places/:pid as it is being filtered in the app.js
router.get("/:pid", (req, res, next) => {
  //  console.log("GET Request in PLaces");
  const placeId = req.params.pid;

  //Finding  the place according to placeId
  const place = DUMMY_PLACES.find((place) => {
    return place.id === placeId;
  });

  res.json({ place });
});

//This route will be directed to /api/places/user/:uid as it is being filtered in the app.js
router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  console.log(userId);

  //Finding the user's places from the data
  const places = DUMMY_PLACES.find((place) => {
    return place.creator === userId;
  });

  res.json({ places });
});

//exporting a module in node js
module.exports = router;
