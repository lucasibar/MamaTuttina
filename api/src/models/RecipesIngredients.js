const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('RecipesIngredients', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    amount: {
      type:DataTypes.STRING,
    },
    ingredient_name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Ingredients',
        key: 'name',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

