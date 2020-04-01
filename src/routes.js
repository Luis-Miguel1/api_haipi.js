const produthanlers = require('./handlers/produts')
module.exports = [{
    method: 'GET',
    path: '/api/v1/product',
    handler: produthanlers.getAll,
},
{
    method: 'POST',
    path: '/api/v1/produts',
    handler: produthanlers.save,
},
{
    method: 'DELETE',
    path: '/api/v1/products/{id}',
    handler: produthanlers.remove,
    options:{
        cors:true,
        
    }
},
{
    method: 'GET',
    path: '/api/v1/products/{id}',
    handler: produthanlers.find,
},
{
    method: 'PUT',
    path: '/api/v1/products/{id}',
    handler: produthanlers.update,
}
];