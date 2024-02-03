const mongoose = require('mongoose');

require('dotenv').config();

const dbconnection = () => {

    mongoose.connect(process.env.DATEBASE_URL, {
        UseNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("db connected successfully");

        }).catch((err) => {
            console.log(err);
            console.log("db failed to connted");
            process.exit(1);

        });
}


module.exports = dbconnection;