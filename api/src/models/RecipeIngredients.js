const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('RecipeIngredients', {
    amount: {
      type: DataTypes.INTEGER
    },
    unit: {
      type:DataTypes.STRING
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};
