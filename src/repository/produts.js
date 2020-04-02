const ProductModel = require('../models/product')


const getAll = async() => await ProductModel.find({});
    


const save = async (payload) => {

    const { name, price } = payload;

    const product = new ProductModel({ name: name, price: price });
   
    await product.save()

return product
}

const remove = async (id)=>await ProductModel.findOneAndDelete(id)


const find =async (id)=>  await ProductModel.findById(id);
    

const update =async (id,payload)=>await ProductModel.findByIdAndUpdate(id,payload) 




module.exports = {
    getAll, save,remove,find,update
}