const post_s = require("../models/postschema");

exports.reterievingpost = async (req, res) => {
    try {
        const id = req.params.id
        const responces = await post_s.findById({ _id: id });


        res.status(200).json({
            success: true,
            message: "post reyeriev sucessfully",
            data: responces,
        });

    }
    catch (error) {

        console.error(error);
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: "failed to reteriev the post",

        })
    }
}