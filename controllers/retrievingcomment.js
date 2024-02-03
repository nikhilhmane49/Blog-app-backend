const comment_s = require("../models/commentschema");

exports.retrievingcomment = async (req, res) => {


    try {
        const id = req.params.id;

        const responces = await comment_s.findById({ _id: id });

        res.status(200).json({
            success: true,
            data: responces,
            message: "comment created successfully",
        });

    }

    catch (error) {
        console.error(error);
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: "failed to retriev the comment",
        });
    };
};
