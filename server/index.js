const express = require('express');
const app = express();
const axios = require('axios');
const TOKEN = require('../config.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());


let PORT = process.env.PORT || 1128;

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});