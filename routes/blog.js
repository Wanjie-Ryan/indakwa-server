const express = require("express");
const router = express.Router();
const { CreateBlog,UpdateBlog,GetBlogs,DeleteBlogs } = require("../controllers/blog");

router.route("/createblog").post(CreateBlog);
router.route('/updateblog/:id').patch(UpdateBlog)
router.route('/getblogs').get(GetBlogs)
router.route('/deleteblog/:id').delete(DeleteBlogs)


module.exports = router;
