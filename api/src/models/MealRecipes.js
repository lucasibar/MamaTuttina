const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('MealRecipes', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    amount: {
      type:DataTypes.INTEGER
    },
    unit: {
      type:DataTypes.STRING
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

