// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views")); //template source dir definen
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public"))); //static files source define

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "Home" }); // index hier is relatief tot het hierboven gedeclareerde source dir voor templates
});

app.get("/user", (req, res) => {
  res.render("user", { title: "profile", userProfile: { nickname: "Auth0" } });
});

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`listening to requests on port localhost:${port}`);
});
