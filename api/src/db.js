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
  Lunches,
  Dinners,
  LunchRecipes, 
  DinnerRecipes,  
  ExtraRecipes, 
  RecipeIngredients,  
  LunchIngredients, 
  DinnerIngredients,  
  ExtraIngredients, 
  Extras
} = sequelize.models;

Days.hasOne(Lunches);
Lunches.belongsTo(Days);
Days.hasOne(Dinners);
Dinners.belongsTo(Days);
Days.hasOne(Extras);
Extras.belongsTo(Days);


Lunches.belongsToMany(Recipes, {through: 'LunchRecipes' });
Recipes.belongsToMany(Lunches, {through: 'LunchRecipes' });

Dinners.belongsToMany(Recipes, {through: 'DinnerRecipes' });
Recipes.belongsToMany(Dinners, {through: 'DinnerRecipes' });

Extras.belongsToMany(Recipes, {through: 'ExtraRecipes' });
Recipes.belongsToMany(Extras, {through: 'ExtraRecipes' });



Recipes.belongsToMany(Ingredients, { through: 'RecipeIngredients' });
Ingredients.belongsToMany(Recipes, { through: 'RecipeIngredients' });



Lunches.belongsToMany(Ingredients, {through: 'LunchIngredients' });
Ingredients.belongsToMany(Lunches, {through: 'LunchIngredients' });

Dinners.belongsToMany(Ingredients, {through: 'DinnerIngredients' });
Ingredients.belongsToMany(Dinners, {through: 'DinnerIngredients' });

Extras.belongsToMany(Ingredients, {through: 'ExtraIngredients' });
Ingredients.belongsToMany(Extras, {through: 'ExtraIngredients' });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
