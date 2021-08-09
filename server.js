
const express = require("express");

//Set up the server
const app = express();
const PORT = process.env.PORT || 3001;

//Setting up the express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

require('./routes/htmlRoute.js')(app);
require("./routes/apiRoute.js")(app);

//Start server
app.listen(PORT, ()=>{
    console.log("Application is now listening on PORT" + PORT)
})