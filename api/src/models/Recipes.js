const { DataTypes } = require('sequelize');
// const {Days, Recipes, Ingredients } = require("../db");


module.exports = (sequelize) => {
  sequelize.define('Recipes', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    category:  {
      type: DataTypes.ENUM ('Legumbre', 'Carne', 'Pollo', 'Pasta', 'Pescado', 'Arroz', 'Lacteo', 'Fruta', 'Panificado', 'Permitidos')
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

