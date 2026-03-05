import { Router } from 'express';
import {saveProduct, getProduct, updateProduct, deleteProduct} from '../Controller/ProductController.js';
import { validateProduct } from '../middleware/ProductValidation.js';
import upload from '../middleware/uploads.js';
const router = Router();

router.get('/', getProduct);
router.post('/', upload.single('image'), saveProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;