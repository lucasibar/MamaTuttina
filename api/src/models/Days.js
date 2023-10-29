const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Days', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    dayName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    orderNumber: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

