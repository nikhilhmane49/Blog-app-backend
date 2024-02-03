const mongoose = require("mongoose");

const commentschema = new mongoose.Schema({

    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post_s",
    },

    user: {
        type: String,
        required: true,
        maxLength: 50,
    },

    body: {
        type: String,
        required: true,
        maxLength: 100,
    },
});

module.exports = mongoose.model("comment_s", commentschema);