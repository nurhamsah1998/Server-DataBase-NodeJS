const express = require('express');
const dataStructure = require('../models/data');
const clasS = express();
const moment = require('moment');

clasS.get('/', async (req, res) => {
  try {
    const x = await dataStructure.find();
    res.json(x);
  } catch (er) {
    res.json(er);
  }
});

clasS.get('/:id', async (req, res) => {
  try {
    const x = await dataStructure.findById(req.params.id);
    res.json(x);
  } catch (er) {
    res.json(er);
  }
});

clasS.post('/', async (req, res) => {
  var w = moment().format('MMMM Do YYYY, h:mm:ss a');
  const f = new dataStructure({
    name: req.body.name,
    position: req.body.position,
    date: w,
  });
  try {
    const x = await f.save();
    res.json(x);
  } catch (er) {
    res.json(er);
  }
});
clasS.delete('/:id', async (req, res) => {
  try {
    const q = await dataStructure.remove({ _id: req.params.id });
    res.json(q);
  } catch (er) {
    res.json(er);
  }
});

clasS.patch('/:id', async (req, res) => {
  try {
    const x = await dataStructure.updateOne({ _id: req.params.id }, { $set: { name: req.body.name, position: req.body.position } });
    res.json(x);
  } catch (er) {
    res.json(er);
  }
});

module.exports = clasS;
