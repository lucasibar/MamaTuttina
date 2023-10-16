
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "PurchaseList",
    {
      amount: {
        type: DataTypes.INTEGER
      },      
      unit: {
        type: DataTypes.STRING
      },
      purchaseListName:{
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false,
    }
  );
};

