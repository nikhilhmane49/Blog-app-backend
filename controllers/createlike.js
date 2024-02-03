const { create } = require("../models/commentschema");
const like_s = require("../models/likeschema");
const post_s = require("../models/postschema");


exports.createlike = async (req, res) => {
    try {
        const { post, user } = req.body;

        const responces = await like_s.create({
            post, user
        });

        const likeupdate = await post_s.findByIdAndUpdate(post, { $push: { like: responces._id } }, { new: true })
            .populate("like")
            .exec();

        res.status(200).json({
            success: true,
            message: "data is stored successfully",
            data: responces
        });

    }
    catch (error) {
        console.log(error);
        console.error(error);

        res.status(500).json({
            success: false,
            message: "data is not stored sucessfully"
        });
    };
};