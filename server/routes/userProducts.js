import express from 'express';

import {getProducts} from '../controllers/userProducts.js';
const router = express.Router();

router.get('/', getProducts);


export default router;