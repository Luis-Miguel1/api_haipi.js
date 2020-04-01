const ProductModel = require('../models/product')

const tranformer=product=>({

        type: 'products',
        id: product.id,
        attributes: {
            name: product.name,
            price: product.price,
        },
        links: {
            self: `/api/v1/produts/${product.id}`,
        
    }
})

const getAll = async(request, h) => {
    const products=await ProductModel.find({});
    return {data: products.map(tranformer)}
}

const save = async (request, h) => {
    console.log(request.payload);
    const { name, price } = request.payload;

    const product = new ProductModel({ name: name, price: price });
    // product.name = name;
    // product.price = price;
    await product.save()

return  h.response(tranformer(product)).code(201)
}

const remove = async (req,h)=>{
 await ProductModel.findOneAndDelete({_id:req.params.id})
 return h.response().code(204)
}
const find =async (req,h)=>{
     product= await ProductModel.findById(req.params.id);
     return {data:tranformer(product)}
}
const update =async (req,h)=>{
    product= await ProductModel.findByIdAndUpdate(req.params.id,req.payload) 
    // const { name, price } = req.payload;
    // product.name=name
    // product.price=price
    //await product.save()
    return {data:tranformer(product)}
}

module.exports = {
    getAll, save,remove,find,update
}