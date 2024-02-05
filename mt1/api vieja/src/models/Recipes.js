const { DataTypes } = require('sequelize');
// const {Days, Recipes, Ingredients } = require("../db");


module.exports = (sequelize) => {
  sequelize.define('Recipes', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
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

