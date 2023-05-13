const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Days', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    day: {
      type:DataTypes.STRING,
      allowNull: false,
      // unique: true,
    },
    lunchId: {
      type: DataTypes.INTEGER,
    },
    dinnerId: {
      type: DataTypes.INTEGER,
    },
    extraId: {
      type: DataTypes.INTEGER,
    },
    totalKcal: {
      type: DataTypes.INTEGER,
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

