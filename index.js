const express = require('express');
const app = express();
const port = 4000;
const mainRouter = require('./src/routes/indexRouter')

// body parse express 
app.use(express.json());

// router utama
app.use('/', mainRouter);


// listen port
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});