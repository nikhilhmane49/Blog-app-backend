const comment_s = require("../models/commentschema");
const post_s = require("../models/postschema");

exports.createcomment = async (req, res) => {

    try {
        const { post, user, body } = req.body;

        const comment = new comment_s({
            post, user, body
        });

        const savecomment = await comment.save();




        const commentUpdate = await post_s.findByIdAndUpdate(post, { $push: { Comments: savecomment._id } }, { new: true })
            .populate("Comments")
            .exec();



        res.status(200).json({
            success: true,
            data: commentUpdate,
            message: "comment created successfully",
        });

    }

    catch (error) {
        console.error(error);
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: "failed to create comment",
        });
    };
};