const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const FootballersSchema  = new mongoose.Schema({

    title: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    }
    id: {
      type   : int,
      required : true,
      validator : value => !validator.isEmpty(value)
    }
    name: {
      type   : String,
      required : true,
      validator : value => !validator.isEmpty(value)
    }

    age: {
      type   : int,
      required : true,
      validator : value => !validator.isEmpty(value)
    }

    club: {
      type   : String,
      required : true,
      validator : value => !validator.isEmpty(value)
    }
 
  }, SchemeConfig);

  module.exports.Footballers = mongoose.model('Footballers', FootballersSchema);