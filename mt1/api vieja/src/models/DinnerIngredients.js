const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('DinnerIngredients', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
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

