const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const router = require('./router.js');

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(router);


app.listen(port, () => console.log(`Listening on port: ${port}`));