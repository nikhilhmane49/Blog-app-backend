
const express = require('express');
const app = express();
require('dotenv').config;
app.use(express.json());

const blogrouter = require("./routes/blogroutes");



app.use("/api/v1", blogrouter);





app.listen(process.env.PORT || 4000, () => {
    console.log("server started successfully");
})


const dbconnection = require("./config/datebase");

dbconnection();