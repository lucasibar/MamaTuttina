const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ListDays",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      dayName: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false,
    }
  );
};
