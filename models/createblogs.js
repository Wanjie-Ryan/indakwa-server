const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },

    name: {
      type: String,
      required: [true, "name of the blog is required"],
    },
    description: {
      type: String,
      required: [true, "A description of the blog is required"],
    },

    link: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blogs", blogSchema);
