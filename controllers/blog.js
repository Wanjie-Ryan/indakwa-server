const blogsModel = require("../models/createblogs");
const { StatusCodes } = require("http-status-codes");

const CreateBlog = async (req, res) => {
  try {
    const blog = await blogsModel.create({ ...req.body });
    // console.log(blog);

    return res.status(StatusCodes.CREATED).json({ msg: "Blog created", blog });
  } catch (err) {
    // console.log(err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong, please try again later" });
  }
};

module.exports = { CreateBlog };
