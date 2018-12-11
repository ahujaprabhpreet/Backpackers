'use strict';
module.exports = function(app) {
    const paymentController = require('../controllers/payment-controller');
    app.route('/payment')
        .get(paymentController.get);
};