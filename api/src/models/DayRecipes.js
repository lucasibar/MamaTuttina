const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('DayRecipes', {
    meal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};
