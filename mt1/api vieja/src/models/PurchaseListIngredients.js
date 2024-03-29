const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('PurchaseListIngredients', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    amount:{
     type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

