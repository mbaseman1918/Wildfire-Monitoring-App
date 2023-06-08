const wildfiremonitorModel = require('../models/wildfiremonitormodel.js');

module.exports = {
  addUser: (req, res) => {
    console.log('addUser got called', req.body.params)
    wildfiremonitorModel.addUser(req.body.params)
      .then((result) => {
        res.status(201).send(result)
      })
      .catch((err) => {
        console.log('Issue posting to DB', err)
      })
  },

  getUser: (req, res) => {
    console.log('getUser got called', req.query)
    wildfiremonitorModel.getUser(req.query)
      .then((result) => {
        res.status(200).send(result)
      })
      .catch((err) => {
        console.log('Issue retrieving user from DB', err)
      })
  }
}