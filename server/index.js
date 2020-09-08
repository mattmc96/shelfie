/** @format */

require('dotenv').config();
const express = require('express');
const massive = require('massive');
const cors = require('cors');
const ctrl = require('./controllers/controller');

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then(db => {
    app.set('db', db);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.get('/api/inventory', ctrl.getAllProducts);
app.post('/api/product', ctrl.createProduct);
app.put('/api/inventory/:id', ctrl.editProduct);
app.delete('/api/product/:id', ctrl.deleteProduct);

app.listen(SERVER_PORT, () =>
  console.log(`Ain't nothing to it but to do it ✨:${SERVER_PORT}`)
);
