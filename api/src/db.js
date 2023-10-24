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

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { 
  Users,
  UserDays,
  Days,
  DaysMeals, 
  Meals,
  MealIngredients,
  MealRecipes,
  Recipes,
  Ingredients,
  RecipeIngredients,
  PurchaseList,
} = sequelize.models; 
 

Users.belongsToMany(Days, {through: 'UserDays'});
Days.belongsToMany(Users, {through: 'UserDays'});

Users.belongsToMany(Recipes, {through: 'UserRecipes'});
Recipes.belongsToMany(Users, {through: 'UserRecipes'});

Days.belongsToMany(Meals, {through: 'DaysMeals'});
Meals.belongsToMany(Days, {through: 'DaysMeals'});

Meals.belongsToMany(Recipes, {through: 'MealRecipes'});
Recipes.belongsToMany(Meals, {through: 'MealRecipes'});

Meals.belongsToMany(Ingredients, {through: 'MealIngredients'});
Ingredients.belongsToMany(Meals, {through: 'MealIngredients'}); 


Users.belongsToMany(Ingredients, {through: 'PurchaseList'});
Ingredients.belongsToMany(Users, {through: 'PurchaseList'});

Recipes.belongsToMany(Ingredients, {through: 'RecipeIngredients'});
Ingredients.belongsToMany(Recipes, {through: 'RecipeIngredients'});




Users.belongsToMany(Ingredients, {through: 'PurchaseList'});
Ingredients.belongsToMany(Users, {through: 'PurchaseList'});

module.exports = {
  ...sequelize.models,
  conn: sequelize,

};
