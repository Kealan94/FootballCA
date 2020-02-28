const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Football   = require('../models/Football').Football;

/**
 * Functionality for this route:
 *  C   POST    /Footballs/        Create a new Football
 *  R   GET     /Footballs         Gets an array of all Footballs
 *  R   GET     /Footballs/:id     Get a single Football, by ID
 *  U   PUT     /Footballs/:id     Update a single Football, by id
 *  D   DELETE  /Footballs/:id     Delete a single Football, by ID
 */

// GET an array of all Footballs change
router.get('/', (req, res) => {
    return mongoose
      .model('Football')
      .find({})
      .then (footballs => res.json(footballs))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single football by ID
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

// POST Create a new football
router.post('/', (req, res) => {
  return new Football({
    title     : req.body.title,
  })
  .save()
  .then (football => Football.populate(football, {path: '_id'}))
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