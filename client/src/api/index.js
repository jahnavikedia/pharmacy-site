import axios from 'axios';
const url = 'http://localhost:5000/admin'

export const createProduct = (newProduct) => axios.post(url,newProduct);