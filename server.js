// Dependencies
// =============================================================
let express = require("express");
let path = require("path");

// Sets up the Express App
// =============================================================
let app = express();
let PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);









//==========================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  