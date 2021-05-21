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