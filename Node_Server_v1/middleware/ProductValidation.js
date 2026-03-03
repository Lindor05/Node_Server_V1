import {body, validator} from 'express-validator';

export const validateProduct = (req,res,next)=>{
    const {name,price} = req.body;
    if (!name) {
        return res.status(400).json({message:"Product name is required"});
    }
    if (!price) {
        return res.status(400).json({message:"Product price is required"});
    }
    if (price < 0) {
        return res.status(400).json({message:"Price must be at least 1"});
    }
    next();
}

export const expressvalidator = (res,req,next)=>{
    body('name')
    .notEmpty()
    .withMessage('Product name is required');
    body('price')
    .notEmpty()
    .withMessage('Product price is required');
    body('price')
    .isFloat({gt:0}).withMessage('Price must be more than 0');
    next();
}

export const validateData = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        next();
    };
}
