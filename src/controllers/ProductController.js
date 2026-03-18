const ProductModel = require("../models/ProductModel");

//Create Products
let createProduct = async (req, res) => {
  try {
    let product = await ProductModel.create({
      ...req.body,
      createdBy: req.user.userId,
    });
    res
      .status(201)
      .json({ message: "Product created Successfully!!", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in crating Product", error: error.message });
  }
};

// Get All Products

let getAllProducts = async (req, res) => {
  try {
    let products = await ProductModel.find();
    res.status(200).json({ message: "Products List", products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in getting Products", error: error.message });
  }
};

// Get Product by id

let getProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await ProductModel.findById(id);
    if (!product) {
      res.status(404).json({ message: "Product NOT found" });
    } else {
      res
        .status(200)
        .json({ message: "Product fetched Successfully", product });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in getting Product", error: error.message });
  }
};

//Delete Product by id

let deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await ProductModel.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!!" });
    } else {
      res.status(200).json({ message: "Product Deleted Successfully!!!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in Deleting Product", error: error.message });
  }
};

//Update Product 

let updateProduct = async(req, res)=>{
  try {
    let id = req.params.id
    let product = await ProductModel.findByIdAndUpdate(id, req.body, {returnDocument:"after"})
    if(!product){
      return res.status(404).json({message:"Product NOT found!!"})
    }else{
      res.status(200).json({message:"Product Updated Successfully", product})
    }
  } catch (error) {
    res.status(500).json({message: "Error in Updating Product", error:error.message})
  }
}
module.exports = { createProduct, getAllProducts, deleteProduct, getProduct, updateProduct};
