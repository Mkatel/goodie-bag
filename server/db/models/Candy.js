const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
});
