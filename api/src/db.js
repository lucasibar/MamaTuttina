require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dieta`, {
  logging: false,
  native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];
try{

} catch (error) {
  console.error('Error while defining models or setting up associations', error);
}
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Days , Recipes, Ingredients, RecipesIngredients, DaysIngredients} = sequelize.models;

Days.belongsTo(Recipes, { as: 'lunch', foreignKey: 'lunchId' });
Days.belongsTo(Recipes, { as: 'dinner', foreignKey: 'dinnerId' });
Days.belongsTo(Recipes, { as: 'extra', foreignKey: 'extraId' });
Recipes.hasMany(Days, { foreignKey: 'lunchId' });
Recipes.hasMany(Days, { foreignKey: 'dinnerId' });
Recipes.hasMany(Days, { foreignKey: 'extraId' });

Days.belongsToMany(Ingredients, { through: DaysIngredients, as: 'lunchIngredients', foreignKey: 'lunchDayId' });
Days.belongsToMany(Ingredients, { through: DaysIngredients, as: 'dinnerIngredients', foreignKey: 'dinnerDayId' });
Days.belongsToMany(Ingredients, { through: DaysIngredients, as: 'extraIngredients', foreignKey: 'extraDayId' });

Ingredients.belongsToMany(Days, { through: DaysIngredients, as: 'lunchDays', foreignKey: 'lunchIngredientId' });
Ingredients.belongsToMany(Days, { through: DaysIngredients, as: 'dinnerDays', foreignKey: 'dinnerIngredientId' });
Ingredients.belongsToMany(Days, { through: DaysIngredients, as: 'extraDays', foreignKey: 'extraIngredientId' });


Ingredients.belongsToMany(Recipes, { through: RecipesIngredients });
Recipes.belongsToMany(Ingredients, { through: RecipesIngredients });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
