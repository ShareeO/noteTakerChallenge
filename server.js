const express = require("express");
const path = require('path');
const app = express.Router();
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

const server = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRoutes)
app.use(htmlRoutes)

app.listen(3001, () => {
    console.log("server running on PORT: " + PORT)

})