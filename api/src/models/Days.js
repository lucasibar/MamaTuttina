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

