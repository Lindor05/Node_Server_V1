import express from 'express';
import ProductRoute from './routes/ProductRoute.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/products',ProductRoute);

export default app;