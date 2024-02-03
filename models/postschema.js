const mongoose = require('mongoose');

const postschema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
        maxLength: 50,
    },

    body: {
        type: String,
        require: true,
        maxLength: 100,
    },

    like: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "like_s",

    }],

    Comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment_s",

    }],

});


module.exports = mongoose.model("post_s", postschema);

