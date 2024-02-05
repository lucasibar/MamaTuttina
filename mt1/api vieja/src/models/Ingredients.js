const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Ingredients', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      // allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    kcal100gr:{
     type: DataTypes.INTEGER
    },
    carbs:{
     type: DataTypes.INTEGER
    },
    proteins:{
     type: DataTypes.INTEGER
    },
    fats:{
     type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.STRING
      // allowNull: false,
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

