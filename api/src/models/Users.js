
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Users', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    location:{
      type: DataTypes.STRING,
      allowNull: true
    },
    kcalObjetive:{
      type: DataTypes.INTEGER,
      defaultValue: 2000
    },
    rol:{
      type: DataTypes.ENUM ('administrador', 'usuario', 'nutricionista', 'personal trainer'),
      defaultValue:'usuario'
    }
},
{
timestamps: true,
createdAt: true,
updatedAt: true
});
};
