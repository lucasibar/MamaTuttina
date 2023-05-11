const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Days', {
    day: {
      type: DataTypes.ENUM('Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'),
      allowNull: false,
      unique: true,
    },
    lunchId: {
      type: DataTypes.INTEGER,
    },
    dinnerId: {
      type: DataTypes.INTEGER,
    },
    extraId: {
      type: DataTypes.INTEGER,
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

