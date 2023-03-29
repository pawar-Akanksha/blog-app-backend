// require("dotenv").config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
app.use(cors());
const fileUpload = require("express-fileupload");
const registerRoute = require("./Routes/Registration");
const loginRoute = require("./Routes/Login")
const Authentication = require("./middleware/middleware");
const postRoute = require("./Routes/Post");

app.use(express.json());
app.use(bodyParser.json());

app.use(fileUpload({
    useTempFiles: true
}))



app.use("/", registerRoute)
app.use("/", loginRoute)
app.use("/", Authentication, postRoute)

module.exports = app