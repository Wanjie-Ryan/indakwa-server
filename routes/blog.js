const express = require("express");
const router = express.Router();
const { CreateBlog,UpdateBlog,GetBlogs } = require("../controllers/blog");

router.route("/createblog").post(CreateBlog);
router.route('/updateblog/:id').patch(UpdateBlog)
router.route('/getblogs').get(GetBlogs)

module.exports = router;
