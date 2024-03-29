import Product from "../models/product.js"
import products from "./data.js"
import mongoose from "mongoose"
import asyncHandler from "express-async-handler"

const seedProducts=asyncHandler(async()=>{
    try{
        mongoose.connect("mongodb+srv://amitabhadawn73:Chiku7908@shopapp.5estezb.mongodb.net/shopapp")

        await Product.deleteMany();
        console.log("products are deleted");

        await Product.insertMany(products)
        console.log("Products are added");
        process.exit();
    }
    catch(err)
    {
        console.log(err.message);
        process.exit();

    }
})

seedProducts();

