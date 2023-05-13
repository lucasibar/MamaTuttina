const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('RecipesIngredients', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    amountKcalRecipes: {
      type:DataTypes.STRING,
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

