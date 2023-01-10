const {
    Pool
} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'latihan_be',
    password: '1mpos1bl3',
    port: 5432
});

module.exports = pool;