'use strict';
module.exports = function(app) {
    const deleteCartController = require('../controllers/deleteCart-controller');
    console.log("route");
    app.route('/deleteCart')
        .delete(deleteCartController.delete);
};