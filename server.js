const express = require("express");
const path = require('path');
const app = express.Router();

const server = express();
const PORT = process.env.PORT || 3001;

app.get( "/", function(req, res) {

})

app.get( "/users", function(req, res) {

})



app.listen(3001, () => {
    console.log("server running on PORT: " + PORT)

})