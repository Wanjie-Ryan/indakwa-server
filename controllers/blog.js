const blogsModel = require("../models/createblogs");
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");
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

const UpdateBlog = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Invalid ID" });
    }

    const updatedBlog = await blogsModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(StatusCodes.NOT_FOUND).json({ msg: "Blog not found" });
    }

    return res
      .status(StatusCodes.OK)
      .json({ msg: "Blog was updated successfully", updatedBlog });
  } catch (err) {
    //   console.error(err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong, please try again later" });
  }
};

const GetBlogs = async(req, res)=>{

    try{

        const blogs = await blogsModel.find({})

        return res.status(StatusCodes.OK).json({msg:'The blogs are:', blogs})


    }

    catch(err){
        console.log(err)
        res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong, please try again later" });
    }
}

module.exports = { CreateBlog, UpdateBlog,GetBlogs };
