const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Lunches', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

