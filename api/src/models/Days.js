const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Days', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
    },
    number: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
    },
    mealNumber: {
      type:DataTypes.INTEGER,
      defaultValue: 3
    },
    actualDay: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

