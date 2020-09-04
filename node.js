const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();

console.log(process.env);

const api_key= process.env.api_key;

app.get('/', (req, res) => {
  res.send('Webcade-Ti-83!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
