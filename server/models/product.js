import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name : String,
    variant : String,
    price : Number,
    quantity : Number,
    description : String,
    discount : Number,
    discountedPrice : Number
})

const Product = mongoose.model('Product',productSchema);

export default Product;