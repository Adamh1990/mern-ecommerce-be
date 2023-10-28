const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "cannot be blank"]
    },
    description: {
        type: String,
        required: [true, "cannot be blank"]
    },
    price: {
        type: String,
        required: [true, "cannot be blank"]
    },
    category: {
        type: String,
        required: [true, "cannot be blank"]
    },
    pictures: {
        type: Array,
        required: true
    }
}, {minimize: false});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;