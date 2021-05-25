import React,{useState} from 'react';
import {Button, Grid,TextField,Typography} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {createProduct} from '../../actions/products'

// custom component for add product
const CreateProduct = () => {
    const [productData,setProductData] = useState({name:'',variant:'',price:'',quantity:'',description :'',discount:'',discountedPrice:''});
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(productData));
        clear();
    }

    const clear = () => {
        setProductData({name:'',variant:'',price:'',quantity:'',description :'',discount:'',discountedPrice:''});
    }
    return(
        <Grid container className="">
        <Grid item xs={12} className="">
        <form onSubmit={handleSubmit}>
            <Grid item xs={12} className="mb_30">            
                <Typography>Add a product</Typography>
            </Grid>
            <Grid item xs={12} className="mb_30">
            <TextField label="Name" variant="outlined" value={productData.name} onChange = {(e) => setProductData({...productData, name:e.target.value })} />
            </Grid>
            <Grid item xs={12} className="mb_30">
            <TextField label="Variant" variant="outlined" value={productData.variant} onChange = {(e) => setProductData({...productData, variant:e.target.value })} />
            </Grid>
            <Grid item xs={12} className="mb_30">
            <TextField label="Price" variant="outlined"  type="number" value={productData.price} onChange = {(e) => setProductData({...productData, price:e.target.value })}/>
            </Grid>
            <Grid item xs={12} className="mb_30">
            <TextField label="Quantity" variant="outlined"  type="number"value={productData.quantity} onChange = {(e) => setProductData({...productData, quantity:e.target.value })}/>
            </Grid>
            <Grid item xs={12} className="mb_30">
            <TextField label="Description" variant="outlined" value={productData.description} onChange = {(e) => setProductData({...productData, description:e.target.value })}/>
            </Grid>
            <Grid item xs={12} className="mb_30">
            <TextField label="Discount" variant="outlined"  type="number"value={productData.discount} onChange = {(e) => setProductData({...productData, discount:e.target.value })}/>
            </Grid>
            <Grid item xs={12} className="mb_30">
            <TextField label="Discounted Price" variant="outlined" type="number" value={productData.discountedPrice} onChange = {(e) => setProductData({...productData, discountedPrice:e.target.value })}/>
            </Grid>
            <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
        </form>
        </Grid>
    </Grid>
    )
}

  
const Admin = () => {
    const [showForm,setShowForm] = useState(false);
    // show and hide button based on condition
    const [showButton,setShowButton] = useState(true);
    return(
        <div className= "">

            {showButton ? <Button style={{marginTop:'20px'}} variant="contained" className="admin" 
            onClick={() => {
                setShowForm(true);
                setShowButton(false);
                }} color="primary">Add a product</Button> : null}
            {/* pass setshow state to createProduct and set to true in handle submit function */}
            {showForm && <CreateProduct />}
        </div>
    );
};

export default Admin;