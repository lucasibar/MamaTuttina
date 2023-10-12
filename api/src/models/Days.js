const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Days', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
   date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    actualDay: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

