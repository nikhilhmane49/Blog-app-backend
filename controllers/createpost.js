const post_s = require("../models/postschema");

exports.createpost = async (req, res) => {

    try {
        const { title, body, like, Comment } = req.body;

        const responces = await post_s.create({ title, body, like, Comment });

        res.status(200).json({
            success: true,
            message: "post created sucessfully",
            data: responces,


        })


    }
    catch (error) {

        console.error(error);
        console.log(error.message);

        res.status(500).json({
            success: false,
            message: "failed to create post",

        });

    };
};