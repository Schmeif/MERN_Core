const ProductController = require('../controllers/product.controller')
const Product = require('../models/product.model')

module.exports = (app) => {
    // create a product
    app.post('/api/createProduct', ProductController.createProduct)

    // get all products
    app.get('/api/getProducts', ProductController.getProducts)

    // get one product
    app.get('/api/getOneProduct/:id', ProductController.getOneProduct)

    // edit product
    app.put('/api/updateProduct/:id', ProductController.updateProduct)

    // delete product
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct)
}