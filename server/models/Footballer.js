const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const FootballerSchema  = new mongoose.Schema({

    title: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    image: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    age: {
      type      :String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    club: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    
 
    
  }, SchemeConfig);

  module.exports.Footballer = mongoose.model('Footballer', FootballerSchema);