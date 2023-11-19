const express = require("express");
const router = express.Router();
const { CreateBlog } = require("../controllers/blog");

router.route("/createblog").post(CreateBlog);

module.exports = router;
