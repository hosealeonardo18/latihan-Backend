// dummy data
let products = [{
        id: 1,
        name: "Kemeja Lengan Pendek",
        price: 50000,
        stock: 20
    },
    {
        id: 2,
        name: "Celana Jeans",
        price: 150000,
        stock: 10
    },
    {
        id: 3,
        name: "Hoodie",
        price: 100000,
        stock: 15
    }
]

let productController = {
    getAllProduct: (req, res) => {
        res.send(products);
    },

    getDetailProduct: (req, res) => {
        const id = Number(req.params.id);
        let product = products.find(products => products.id === id)
        res.send(product)
    },

    createProduct: (req, res) => {
        const {
            name,
            price,
            stock
        } = req.body;

        let newProduct = {
            id: products.length + 1,
            name,
            price,
            stock
        }

        products.push(newProduct);
        res.json({
            message: "Product Created!"
        });
    },

    updateProduct: (req, res) => {
        const id = Number(req.params.id);
        const {
            name,
            price,
            stock
        } = req.body;
        const index = products.findIndex(products => products.id === id)

        let updateProduct = {
            id: products[index].id,
            name,
            price,
            stock
        };

        products[index] = updateProduct;
        res.json({
            message: "Product Updated!"
        });
    },

    deleteProduct: (req, res) => {
        const id = Number(req.params.id);
        const index = products.findIndex(products => products.id === id)

        products.splice(index, 1)
        res.json({
            message: "Product Deleted!"
        });
    }
};

module.exports = productController