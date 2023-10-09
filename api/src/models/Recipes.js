const { DataTypes } = require('sequelize');

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
      type: DataTypes.ENUM ("None", 'Legumbre', 'Carne', 'Pollo', 'Pasta', 'Pescado', 'Arroz', 'Lacteo', 'Fruta', 'Panificado', 'Permitidos'),
      default:'None' 
    }
  
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

