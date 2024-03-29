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
const { 
  Days,
  Recipes,
  Ingredients,
  LunchRecipes,
  LunchIngredients,
  DinnerRecipes,
  DinnerIngredients,
  ExtraRecipes,
  ExtraIngredients,
  RecipeIngredients,
  PurchaseListIngredients,
  PurchaseLists
} = sequelize.models;

PurchaseLists.belongsToMany(Ingredients, {through: 'PurchaseListIngredients'});
Ingredients.belongsToMany(PurchaseLists, {through: 'PurchaseListIngredients'});

Days.belongsToMany(Recipes, {through: 'LunchRecipes', as: 'lunchRecipes'});
Recipes.belongsToMany(Days, {through: 'LunchRecipes', as: 'lunchDays'});
Days.belongsToMany(Recipes, {through: 'DinnerRecipes', as: 'dinnerRecipes'});
Recipes.belongsToMany(Days, {through: 'DinnerRecipes', as: 'dinnerDays'});
Days.belongsToMany(Recipes, {through: 'ExtraRecipes', as: 'extraRecipes'});
Recipes.belongsToMany(Days, {through: 'ExtraRecipes', as: 'extraDays'});

Days.belongsToMany(Ingredients, {through: 'LunchIngredients' , as: 'lunchIngredients'});
Ingredients.belongsToMany(Days, {through: 'LunchIngredients' , as: 'lunchDays'});
Days.belongsToMany(Ingredients, {through: 'DinnerIngredients', as: 'dinnerIngredients'});
Ingredients.belongsToMany(Days, {through: 'DinnerIngredients', as: 'dinnerDays'});
Days.belongsToMany(Ingredients, {through: 'ExtraIngredients' , as: 'extraIngredients'});
Ingredients.belongsToMany(Days, {through: 'ExtraIngredients' , as: 'extraDays'});

Recipes.belongsToMany(Ingredients, { through: 'RecipeIngredients' });
Ingredients.belongsToMany(Recipes, { through: 'RecipeIngredients' });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');

};
