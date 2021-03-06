const express = require("express");
// const router = require("express").Router();

// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "/client/build/index.html"));
// });


// Start the API server
app.listen(PORT, function () {
  console.log(`Hosting on http://localhost:${PORT}/`);
});