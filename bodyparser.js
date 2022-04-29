const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is listening...");
});

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

app.get("/students", (req, res) => {
  console.log(req.query);
  const { name, interests, location } = req.query;

  if (name) {
    const student = students[name.toLowerCase()];
    return res.send(students[name]);
  }
});
