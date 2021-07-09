const express = require('express');
const app = express();
const axios = require('axios');
const { keyRequest } = require('../config.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.get('/animals', (req, res) => {
  const species = req.query.species;
  const zip = req.query.zip;
  axios.post(`https://api.petfinder.com/v2/oauth2/token`, keyRequest)
    .then(response => {
      const config = { headers: { "Authorization": `Bearer ${response.data.access_token}`}};
      const bodyParams = {key: "value"};
      axios.get(`https://api.petfinder.com/v2/animals?type=${species}&location=${zip}`,
        // bodyParams,
        config
      )
        .then(response => {
          res.status(200).json(response.data)
        })
        .catch(err => console.log(`err at server ${err}`))
  })
    .catch(err => console.log(err))
})


let PORT = process.env.PORT || 1128;

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});