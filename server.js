const express = require("express");

const PORT = process.env.PORT || 3001;


const app = express();

app.get( "/", function(req, res) {

})

app.get( "/users", function(req, res) {

})



app.listen(PORT, function() {
    console.log("server running on PORT: " + PORT)

})