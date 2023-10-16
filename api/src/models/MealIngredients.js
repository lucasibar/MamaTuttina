const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('MealIngredients', {
  amount:{
    type: DataTypes.INTEGER
  },
  unit:{
    type: DataTypes.STRING
  }
},
{
  timestamps: true,
  createdAt: true,
  updatedAt: false
  });
};
