const express = require('express');

const router = express.Router();



const { createpost } = require("../controllers/createpost");

const { reterievingpost } = require("../controllers/reterievingpost");

const { createcomment } = require("../controllers/createcomment");

const { retrievingcomment } = require("../controllers/retrievingcomment");

const { createlike } = require("../controllers/createlike");



router.post("/createpost", createpost);

router.get("/reterievingpost/:id", reterievingpost);

router.post("/createcomment", createcomment);

router.get("/retrievingcomment/:id", retrievingcomment);

router.post("/createlike", createlike);

module.exports = router;
