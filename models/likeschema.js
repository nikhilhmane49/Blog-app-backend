const mongoose = require("mongoose");

const likeschema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post_s",
    },

    user: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("like_s", likeschema);