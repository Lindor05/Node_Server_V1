import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [1, 'Price must be at least 1'],
    },
    timestamps: {
        type: Date,
        default: Date.now,
    }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
