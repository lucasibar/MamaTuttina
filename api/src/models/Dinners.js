const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Dinners', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

