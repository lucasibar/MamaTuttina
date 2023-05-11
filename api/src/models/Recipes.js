const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Recipes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
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

