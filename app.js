const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRouter = require('./routes/post');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postRouter);

app.get('/', (req, res) => {
  res.send('preketek');
});

mongoose
  .connect(process.env.DB_CONNECTION)
  .then((res) => {
    console.log('Conek');
  })
  .catch((err) => {});
app.listen(8000);
