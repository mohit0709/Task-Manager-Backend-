const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        //validators for schema
        type:String,
        required:[true,'name is must'],
        trim:true,
        maxlength:[20,'name cannot exceed 20 characters'],
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('Task', TaskSchema);