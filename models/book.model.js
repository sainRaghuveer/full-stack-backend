const mongoose = require('mongoose');

const bookSchema=mongoose.Schema({
    name:String,
    zoner:String,
    author:String
})

const BookModel=mongoose.model("Book",bookSchema)

module.exports={
    BookModel
}