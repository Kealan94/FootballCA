const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Football   = require('../models/Football').Football;

/**
 * Functionality for this route:
 *  C   POST    /Footballers/        Create a new Football
 *  R   GET     /Footballers         Gets an array of all Footballers
 *  R   GET     /Footballers/:id     Get a single Footballer, by ID
 *  U   PUT     /Footballers/:id     Update a single Footballer, by id
 *  D   DELETE  /Footballers/:id     Delete a single Footballer, by ID
 */

// GET an array of all Footballers change
router.get('/', (req, res) => {
    return mongoose
      .model('Footballer')
      .find({})
      .then (Footballers => res.json(Footballers))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single Football by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Football')
    .findOne({_id: req.params.id})
    .then (football => res.json(football))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new Footballer
router.post('/', (req, res) => {
  return new Football({
    id        : req.body.id,
    title     : req.body.title,
    name      : req.body.name,
    age       : req.body.age,
    club      : req.body.club,
    Description : req.body.Description,
  })
  .save()
  .then (football => Football.populate(football, {path: '_id, title,name,age,club,description'}))
  .then (football => res.json(football))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a topic with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Football
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a football
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Football
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        title  : req.body.title,
      }},
      {new: true}
    )
    .then (football => Football.populate(football, {path: '_id'}))
    .then (football => res.json(football))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;