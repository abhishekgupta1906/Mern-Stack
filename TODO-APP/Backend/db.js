const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://abhishekgupta87984:abhi3456@cluster0.h0neeya.mongodb.net/")

const schema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',schema);
module.exports={
    todo:todo
}    