// require (import) express
const express = require("express");

//create an express server from the express function above
const server = express(); //server is currently deaf af, can't hear anything\

server.use(express.json());

const PORT = process.env.PORT || 3000;

server.listen();

server.listen(PORT, () => {
  console.log("server listening...");
});
const destinations = [];

const students = {
  dao: {
    name: "dao",
    interests: ["food", "bananas"],
    location: "sacramento",
  },
  nikko: {
    name: "nikko",
    interests: ["bananas"],
    location: "sacramento",
  },
};

//get students
//?name=STUDENT_NAME
//localhost:3000/students?interest=bananas

server.get("/students", (req, res) => {
  console.log(req.query);
  const { name, interests, city } = req.query;

  if (name) {
    //if req.query is name (not empty) then do below logic

    const student = students[name.toLowerCase()];

    return res.send(students[name]); //if query is name, return the name
    // let filteredStudents = Object.values(students)
  }

  //   if (interests) {
  //     filteredStudents = filteredStudents.filter((student) =>
  //     student.interests.includes(interests.toLowerCase())
  //   }
});

server.post("/destinations", (req, res) => {
  //only grab what i need
  const { destination, location, photo, description } = req.body;

  //validate that you got what you expected "i.e destination and location are both present and not empty strings"
  if (
    !destination ||
    !location ||
    destination.length === 0 ||
    location.length === 0
  ) {
    return res
      .status(400)
      .send({ error: "Destination and location are both required" });
  }

  // let newDestPhoto = (condition) ? dothiswhentrue : dothiswhenfalse (turnary operator)
  // above code is same as below
  // let newDestPhoto;
  // if (photo && photo.length !== 0){
  //   newDestPhoto = photo
  // }
  // else{
  //   newDestPhoto = "dslkfjsdklfj"
  // }

  //create the new object to put in my database

  const newDest = {
    destination,
    location,
    photo: photo && photo.length !== 0 ? photo : "dslkfjsdklfj",
    description: description && description.length !== 0 ? description : "",
  };
  destinations.push(newDest);

  res.redirect(303, "/destinations"); //i am redirecting to a GET method because of the 303 code which looks for a get method...otherwise it will be 302 by default.
});

//CRUD (create, read, update, delete)
server.get("/destinations", (req, res) => {
  res.send(destinations);
});
