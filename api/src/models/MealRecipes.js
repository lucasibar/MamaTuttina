const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('MealRecipes', {
    portions: {
      type: DataTypes.INTEGER,

    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};
