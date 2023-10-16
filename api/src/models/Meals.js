const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Meals', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    mealName: {
      type: DataTypes.STRING,
    }  
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

