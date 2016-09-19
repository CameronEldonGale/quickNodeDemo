var stuff = require('../models/stuff')


var controller = {
  getThings: function(req, res){
    res.status(200).json(stuff)
  }
}

module.exports = controller;
