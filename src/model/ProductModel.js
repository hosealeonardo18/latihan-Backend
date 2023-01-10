const Pool = require('../config/db');

const selectAllProducts = () => {
    return Pool.query(`SELECT * FROM products`);
};

const selectDetailProducts = (id) => {
    return Pool.query(`SELECT * FROM products WHERE id=${id}`);
};

const createProducts = (data) => {
    const {
        id,
        name,
        price,
        stock
    } = data;
    return Pool.query(`INSERT INTO products(id, name, price, stock) VALUES (${id}, '${name}', ${price}, ${stock})`);
};

const updateProducts = (data) => {
    const {
        id,
        name,
        price,
        stock
    } = data;
    return Pool.query(`UPDATE products SET name='${name}', price = ${price}, stock = ${stock} WHERE id = ${id}`);
};

const deleteProducts = (id) => {
    return Pool.query(`DELETE FROM products WHERE id = ${id}`);
};

const countData = () => {
    return Pool.query(`SELECT COUNT(*) FROM products`);
};

const findId = (id) => {
    return new Promise((resolve, reject) => {
        Pool.query(`SELECT id FROM products WHERE id=${id}`, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            };
        });
    });
};

module.exports = {
    selectAllProducts,
    selectDetailProducts,
    createProducts,
    updateProducts,
    deleteProducts,
    countData,
    findId
};