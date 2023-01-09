const express = require('express');
const router = express.Router();
const productRouter = require('../routes/ProductRoutes');

router.use('/products', productRouter)

module.exports = router;