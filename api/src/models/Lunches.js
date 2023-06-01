const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Lunches', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

