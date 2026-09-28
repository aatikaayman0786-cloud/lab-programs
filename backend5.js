const express = require('express');
const app = express();
app.use(express.json());

let products = [
    { id: 1, name: 'laptop', price: 75000},
    { id: 2, name: 'mouse', price: 500},
    { id: 3, name: 'keyboard', price: 12000},
];
let nextId = 4;

app.get('/products', (req, res) => {
    res.json(products);
});
app.post('/products', (req, res) => {
    const product = {
        id: nextId++,
        name: req.body.name,
        price: req.body.price
    };
    products.push(product);
    res.status(201).json(product);
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});