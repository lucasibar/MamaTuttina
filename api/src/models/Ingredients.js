const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Ingredients', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    kcla100gr:{
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
    }
   
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

