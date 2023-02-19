const express = require('express');
const{BookModel}=require("../models/book.model")
const jwt=require("jsonwebtoken")

const bookRoute=express.Router()

bookRoute.get("/books",async (req,res)=>{
    const books=await BookModel.find()
    res.send(books)
})


bookRoute.post("/add",(req,res)=>{
  try {
    const book=req.body;
    const add=new BookModel(book)
    add.save()
    res.send({"msg":"Book data successfully added"})
  } catch (error) {
    res.send({"msg":error.message})
  }
})

bookRoute.patch("/update/:id",async (req,res)=>{
    const Id=req.params.id;
    const payload=req.body
    try {
        await BookModel.findByIdAndUpdate({_id:Id},payload)
        res.send({"msg":"Data successfully updated"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

bookRoute.delete("/delete/:id",async (req,res)=>{
    const Id=req.params.id;
    try {
        await BookModel.findByIdAndDelete({_id:Id})
        res.send({"msg":"Book data successfully deleted"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={
    bookRoute
}