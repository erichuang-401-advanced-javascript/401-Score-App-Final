'use strict';

const express = require('express');
const uuid = require('uuid/v4');
// eslint-disable-next-line new-cap
const crudRoute = express.Router();

let DB = [
  { _id: '0', name: 'cool guy', score: 100 },
  { _id: '1', name: 'avg guy', score: 70 },
  { _id: '2', name: 'nice guy', score: 0 },
  { _id: '3', name: 'bad guy', score: 100 },
];

helpSort(DB);

crudRoute.get('/scores', getScore);
crudRoute.get('/scores-bigger-than/:value', getGreater);
crudRoute.post('/scores', createScore);
crudRoute.delete('/scores', deleteScore);

function helpSort(array){
  return array.sort((a, b) => {
    return a.score - b.score;
  });
}

function getScore(request, response){
  response.json(DB);
}

function getGreater(request, response){
  const value = parseInt(request.params.value);
  let scoresGreater = DB.filter(record => {
    return record.score > value;
  });
  response.json(scoresGreater);
}

function createScore(request, response){
  let newRecord = {
    _id: uuid(),
    name: request.body.name,
    score: parseInt(request.body.score),
  };
  DB.push(newRecord);
  helpSort(DB);
  console.log(DB);
  response.json(DB);
}

function deleteScore(request, response){
  let id = request.body.id;
  // console.log(id, typeof id);
  DB = DB.filter(record => {
    return id !== record._id;
  });
  helpSort(DB);
  // console.log(DB);
  response.json(DB);
}


module.exports = crudRoute;
