const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Recetas', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    descripcion: {
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

