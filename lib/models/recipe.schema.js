'use strict';

const Recipe = (sequelize, DataTypes) => sequelize.define('Recipes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instructions: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Recipe;
