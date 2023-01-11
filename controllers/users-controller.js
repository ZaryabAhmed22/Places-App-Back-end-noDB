const uuid = require("uuid");

//Own imports
const HttpError = require("../models/http-error");

//Setting up dummy data
const DUMMY_USERS = [
  {
    id: "u1",
    name: "Zaryab",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    places: 3,
  },
  {
    id: "u2",
    name: "Jonas",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    places: 5,
  },
];

//Creating this middleware function for /api/users/:uid
const getUserById = (req, res, next) => {
  res.json({ DUMMY_USERS });
};

//Creating this middleware function for /api/users/signup
const createUser = (req, res, next) => {
  //This is the data sent by signup form
  const { name, email, password } = req.body;

  //Creating a new User
  const createdUser = {
    id: uuid.v4(),
    name,
    email,
    password,
  };

  //Adding the created user to the users data
  DUMMY_USERS.push(createdUser);

  //returning a response
  res.status(201).json({ user: createdUser });
};

const loginUser = (req, res, next) => {
  //This is the data sent by signup form
  const { name, email, password } = req.body;

  //Returning the matched user
  const user = DUMMY_USERS.find((user) => {
    return (
      name === user.name && email === user.email && password === user.password
    );
  });
};
//Exporting are functions >> this is the syntax used to export multiple functions
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.loginUser = loginUser;
