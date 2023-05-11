const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Dias', {
    diaSemana: {
      type: DataTypes.ENUM('Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'),
      allowNull: false,
      unique: true,
    },
    almuerzoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cenaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    extraId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

