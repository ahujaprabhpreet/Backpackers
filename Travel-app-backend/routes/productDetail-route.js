'use strict';
module.exports = function(app) {
    const productDetailController = require('../controllers/productDetail-controller');
    app.route('/productdetail/:productId')
        .get(productDetailController.get);
};