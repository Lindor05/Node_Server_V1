import products from '../data/product.js';
import ProductModel from '../models/ProductModel.js';

export const getProduct = (req,res)=>{
    res.status(200).json({products:products});
}


export const saveProduct = async (req,res)=>{
    const newProduct = new ProductModel({
        name:req.body.name,
        price:req.body.price
    });
    try {
        await newProduct.save();
        res.status(201).json({message:"product created",product:newProduct});
    } catch (error) {
        res.status(500).json({message:"error creating product",error:error.message});
    }    
}

    export const addProduct = async (req,res)=>{
        const newProduct = new ProductModel({
            name:req.body.name,
            price:req.body.price
        });
        await newProduct.save()
            .then(()=>{
                res.status(201).json({message:"product created",product: newProduct});
            })
            .catch((error)=>{
                res.status(500).json({message:"error creating product",error:error.message});
            })
    }    


export const createProduct = (req,res)=>{
    console.log(req.body);
    const newProduit ={
        id:products.length +1,
        name:req.body.name,
        price: req.body.price
    }
    products.push(newProduit);
    res.status(201).json({message:"product created",products:newProduit});
}

export const updateProduct = (req,res)=>{
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if(!product){
        return res.status(404).json({message:"product not found"});
    }
    const index = products.indexOf(product);
    products[index] = {...product,...req.body};
    res.status(200).json({message:"product updated",product:products[index]});
}

export const deleteProduct = (req,res)=>{
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if(!product){
        return res.status(404).json({message:"product not found"});
    }
    const index = products.indexOf(product);
    products.splice(index,1);
    res.status(200).json({message:"product deleted"});
}
