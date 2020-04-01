const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ProductSchema=new Schema({
name: {type:String , required:false},
price: {type:Number, required:false}
});

module.exports=mongoose.model('Product',ProductSchema);