const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({

    image:{

        type:string
    },

    name:{
        type:string,
        required:[true, 'name of the blog is required']
    },
    description:{
        
    }

})