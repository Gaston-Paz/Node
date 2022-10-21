const express = require('express');
const app = express();
const port = 8080;

//Servir contenido estatico
app.use(express.static('templated-roadtrip'));

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/templated-roadtrip/generic.html')
});

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/templated-roadtrip/elements.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });