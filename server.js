const express = require("express");
const path = require('path');
const app = express();
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

const PORT = process.env.PORT || 3001;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRoutes)
app.use(htmlRoutes)

app.listen(3001, () => {
    console.log("server running on PORT: " + PORT)

})