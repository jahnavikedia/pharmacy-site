import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from './routes/adminProducts.js';
import userRoutes from './routes/userProducts.js';
import Product from './models/product.js';
dotenv.config();


const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/user',userRoutes); 
app.use('/admin',adminRoutes);

// var new_user = new Product({
//     name : 'tanmay',
//     variant : 'sasa',
//     price : 23,
//     quantity : 1,
//     description : "sasasa",
//     discount : 45,
//     discountedPrice : 32
// })
  
// new_user.save(function(err,result){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(result)
//     }
// })




const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT,()=> console.log(`Server running at: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);