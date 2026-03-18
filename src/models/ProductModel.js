let mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "admin" },
});

module.exports = mongoose.model("product", productSchema);
