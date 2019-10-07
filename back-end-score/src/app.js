'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const crudRoute = require('./route/crud');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('morning');
});
app.use(crudRoute);

module.exports = {
  start: (port) => {
    const PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`🥂 Good to go : ${PORT}`);
    });
  },
};
