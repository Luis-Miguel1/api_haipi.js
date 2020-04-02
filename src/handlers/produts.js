const ProductRepository = require('../repository/produts')

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
    const products=await ProductRepository.getAll ();
    return {data: products.map(tranformer)}
}

const save = async (req, h) => {
   
  const product=  await ProductRepository.save(req.payload)
 
return  h.response(tranformer(product)).code(201)
}

const remove = async (req,h )=>{
 await ProductRepository.remove(req.params.id)
 return h.response().code(204)
}
const find =async (req)=>{
     product= await ProductRepository.find(req.params.id);
     return {data:tranformer(product)}
}
const update =async (req,h)=>{
    product= await ProductRepository.update(req.params.id,req.payload) 
 
    return {data:tranformer(product)}
}

module.exports = {
    getAll, save,remove,find,update
}