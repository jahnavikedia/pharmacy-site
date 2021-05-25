import mongoose from 'mongoose';
import Product from '../models/product.js'

export const getProducts = async (req,res)=>{

    try {
        const prodcuts = await Product.find(); 

        //console.log(postMessages);
        res.status(200).json(prodcuts);
    }
    catch(error){
        res.status(404).json({message : error.message});
    }
}

export const createProduct = async (req,res)=>{
    const product = req.body;
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        console.log(product)
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}