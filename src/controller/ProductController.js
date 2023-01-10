const productModel = require('../model/ProductModel');
const helper = require('../helper/common');

let productController = {
    getAllProduct: async (req, res) => {
        try {
            const result = await productModel.selectAllProducts();
            helper.response(res, result.rows, 200, "Get Data Success!");
        } catch (error) {
            console.log(error);
        }
    },

    getDetailProduct: async (req, res) => {
        const id = Number(req.params.id);
        const {
            rowCount
        } = await productModel.findId(id);

        if (!rowCount) {
            res.json({
                message: 'Product Not Found!'
            })
        }
        productModel.selectDetailProducts(id).then((result) => {
            helper.response(res, result.rows[0], 200, 'Get Data Success!')
        }).catch(error => {
            res.send(error);
        })
    },

    createProduct: async (req, res) => {
        const {
            name,
            price,
            stock
        } = req.body;
        const {
            rows: [count]
        } = await productModel.countData();

        const id = Number(count.count) + 2
        let data = {
            id,
            name,
            price,
            stock
        };

        productModel.createProducts(data).then((result) => {
            helper.response(res, result.rows, 201, 'Product Created!')
        }).catch(error => {
            res.send(error);
        })

    },

    updateProduct: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const {
                name,
                price,
                stock
            } = req.body;
            const {
                rowCount
            } = await productModel.findId(id);

            if (!rowCount) {
                res.json({
                    message: 'Product Not Found!'
                })
            }

            let data = {
                id,
                name,
                price,
                stock
            };

            productModel.updateProducts(data).then((result) => {
                helper.response(res, result.rows, 200, 'Product Updated!')
            }).catch(error => {
                res.send(error);
            })

        } catch (error) {

        }
    },

    deleteProduct: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const {
                rowCount
            } = await productModel.findId(id);

            if (!rowCount) {
                res.json({
                    message: 'Product Not Found!'
                })
            }

            productModel.deleteProducts(id).then((result) => {
                helper.response(res, result.rows, 200, 'Product Deleted!')
            }).catch(error => {
                res.send(error);
            })

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = productController