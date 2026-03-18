let express = require("express")
const {createProduct, getAllProducts, deleteProduct, getProduct, updateProduct} = require("../controllers/ProductController")
const authmiddleware = require("../middlewares/authMiddleware")
let productRouter = express.Router()

productRouter.post("/add-product", authmiddleware,  createProduct)
productRouter.get("/getAllProducts",  getAllProducts)
productRouter.delete("/delete-product/:id", authmiddleware, deleteProduct)
productRouter.get("/getProduct/:id", getProduct)
productRouter.patch("/update-product/:id", authmiddleware, updateProduct)
module.exports = productRouter