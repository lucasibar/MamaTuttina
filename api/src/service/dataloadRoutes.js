const { Router } = require("express");
const { Op } = require("sequelize");
const {
  UserDays, 
  UserRecipes, 
  DayMeals, 
  MealRecipes, 
  MealIngredients, 
  RecipeIngredients,
  Users, 
  Days, 
  Recipes, 
  Ingredients, 
  Meals} = require("../db");

const dataloadRoutes = Router();


dataloadRoutes.get("/", async (req, res) => {
  try{

    await Users.create({name:"Lucas",
    email:"lucas@gmail.com",
    location:"bosque",
    kcalObjetivo: 2000,
    password: "1234Kapo"})

    await Days.create({
      dayName:"Martes",
      orderNumber:2
    })    
     await Days.create({
       dayName:"Lunes",
       orderNumber:1
     })

     await Meals.create({
       mealName: "Almuerzo"
      })
      await Meals.create({
        mealName: "Cena"
      })
      await Meals.create({
        mealName: "Extra"
      })
    await Ingredients.bulkCreate(ingredientes)
    await Recipes.create({
      name:"Bife con Pure",
      category: 'Carne',
    })
    await Recipes.create({
      name:"Leche con tostadas",
      category: 'Lacteo',
    })
    //LLAMADO DE EJEMPLOS
    
    
    
    const meals = await Meals.findAll()
    
    const bifeconPure = await Recipes.findOne({where:{name: 'Bife con Pure'}})
    const lecheTostadas = await Recipes.findOne({where:{name: 'Leche con tostadas'}})
    
    const leche = await Ingredients.findOne({where:{name: "Leche descremada"}})
    const papas = await Ingredients.findOne({where:{name: "Papas cocidas"}})
    const bife = await Ingredients.findOne({where:{name: "Bife Ancho"}})
    const lecheEntera = await Ingredients.findOne({where:{name: "Leche entera"}})
    const tostadas = await Ingredients.findOne({where:{name: "Pan de trigo blanco"}})

    




    const lucas = await Users.findOne({where:{name:"Lucas"}})
    const nuevoDIa= await Days.create({date: new Date()})
    const planificacionDias = await Days.findAll({where: {dayName: {[Op.ne]: null}}})

    //RELACIONES ENTRE EJEMPLOS
    nuevoDIa.addUsers(lucas)

    planificacionDias.map(async day=> {
     await day.addUsers(lucas)
     await day.addMeals(meals[0])
     await day.addMeals(meals[1])
     await day.addMeals(meals[2])
 
    })
    
    await nuevoDIa.addMeals(meals[0])
    await nuevoDIa.addMeals(meals[1])
    await nuevoDIa.addMeals(meals[2])


    
    await meals[0].addRecipes(bifeconPure, { through: { portions: 1 } })
    await meals[1].addRecipes(lecheTostadas, { through: { portions: 1 } })
    await meals[2].addIngredients(leche, { through: { amount: 1, unit: "ml" } })
    await meals[2].addIngredients(tostadas, { through: { amount: 2, unit: "unit" } })
    //-------------------------------------------------------------------------------------------------
    // PROBAR LOS NULL await meals[2].addIngredients(tostadas)
//-------------------------------------------------------------------------------------------------
    
    await bifeconPure.addIngredients(papas, { through: { amount: 200, unit: "grs" } })
    await bifeconPure.addIngredients(lecheEntera, { through: { amount: 200, unit: "ml" } })
    await bifeconPure.addIngredients(papas, { bife: { amount: 300, unit: "grs" } })

    await lecheTostadas.addIngredients(leche, { through: { amount: 1, unit: "ml" } })
    await lecheTostadas.addIngredients(tostadas, { through: { amount: 2, unit: "unit" } })
    

    
    
    
    // Relaciones extraordinarias: Usuario/Recipe Usuario/Ingredient
    await lucas.addRecipes(bifeconPure)
    await lucas.addRecipes(lecheTostadas)
    await lucas.addIngredients([papas, lecheEntera, bife])
    
    res.status(200).json("Data mock cargada")
  }
  catch(error){res.status(400).json({ Error: error.message })} 
});

module.exports = dataloadRoutes;


const ingredientes = [
  //VERDURAS Y HORTALIZAS    
  {activo: false, name:"Aceitunas negras", kcal100gr: 349, fat:35},
  {activo: false, name:"Aceitunas verdes", kcal100gr: 132},
  {activo: false, name:"Acelgas", kcal100gr: 33},
  {activo: false, name:"Ajos", kcal100gr: 169},
  {activo: false, name:"Alcachofas", kcal100gr: 64},
  {activo: false, name:"Apio", kcal100gr: 20},
  {activo: false, name:"Berenjena", kcal100gr: 29},
  {activo: false, name:"Berros", kcal100gr: 21},
  {activo: false, name:"Brócoli", kcal100gr: 31},
  {activo: false, name:"Calabacín", kcal100gr: 31},
  {activo: false, name:"Calabaza", kcal100gr: 24},
  {activo: false, name:"Cebolla", kcal100gr: 47},
  {activo: false, name:"Cebolla tierna", kcal100gr: 39},
  {activo: false, name:"Champiñón y otras setas", kcal100gr: 28},
  {activo: false, name:"Col", kcal100gr: 28},
  {activo: false, name:"Col de Bruselas", kcal100gr: 54},
  {activo: false, name:"Coliflor", kcal100gr: 30},
  {activo: false, name:"Endibia", kcal100gr: 22},
  {activo: false, name:"Escarola", kcal100gr: 37},
  {activo: false, name:"Espárragos", kcal100gr: 26},
  {activo: false, name:"Espinaca", kcal100gr: 32},
  {activo: false, name:"Habas tiernas", kcal100gr: 64},
  {activo: false, name:"Hinojo", kcal100gr: 16},
  {activo: false, name:"Lechuga", kcal100gr: 18},
  {activo: false, name:"Nabos", kcal100gr: 29},
  {activo: false, name:"Papas cocidas", kcal100gr: 86},
  {activo: false, name:"Pepino", kcal100gr: 12},
  {activo: false, name:"Perejil", kcal100gr: 55},
  {activo: false, name:"Pimiento", kcal100gr: 22},
  {activo: false, name:"Morron", kcal100gr: 22},
  {activo: false, name:"Porotos verdes", kcal100gr: 21},
  {activo: false, name:"Puerros", kcal100gr: 42},
  {activo: false, name:"Rábanos", kcal100gr: 20},
  {activo: false, name:"Remolacha", kcal100gr: 40},
  {activo: false, name:"Repollo", kcal100gr: 19},
  {activo: false, name:"Rúcula", kcal100gr: 37},
  {activo: false, name:"Brotes de Soja", kcal100gr: 50},
  {activo: false, name:"Tomate triturado en conserva", kcal100gr: 39},
  {activo: false, name:"Tomates", kcal100gr: 22},
  {activo: false, name:"Zanahoria", kcal100gr: 42},
  {activo: false, name:"Zumo de tomate", kcal100gr: 21},
  {activo: false, name:"Zapallitos", kcal100gr: 16},
  {activo: false, name:"Zapallo", kcal100gr: 57},
  //FRUTAS
  {activo: false, name:"Arándanos", kcal100gr: 41},
  {activo: false, name:"Cereza", kcal100gr: 47},
  {activo: false, name:"Ciruela", kcal100gr: 44},
  {activo: false, name:"Ciruela seca", kcal100gr: 290},
  {activo: false, name:"Coco", kcal100gr: 646},
  {activo: false, name:"Dátil", kcal100gr: 279},
  {activo: false, name:"Dátil seco", kcal100gr: 306},
  {activo: false, name:"Frambuesa", kcal100gr: 40},
  {activo: false, name:"Fresas", kcal100gr: 36},
  {activo: false, name:"Granada", kcal100gr: 65},
  {activo: false, name:"Grosella", kcal100gr: 37},
  {activo: false, name:"Higos", kcal100gr: 80},
  {activo: false, name:"Higos secos", kcal100gr: 275},
  {activo: false, name:"Kiwi", kcal100gr: 51},
  {activo: false, name:"Limón", kcal100gr: 39},
  {activo: false, name:"Mandarina", kcal100gr: 40},
  {activo: false, name:"Mango", kcal100gr: 57},
  {activo: false, name:"Manzana", kcal100gr: 52},
  {activo: false, name:"Melón", kcal100gr: 31},
  {activo: false, name:"Mora", kcal100gr: 37},
  {activo: false, name:"Naranja", kcal100gr: 44},
  {activo: false, name:"Nectarina", kcal100gr: 64},
  {activo: false, name:"Nísperos", kcal100gr: 97},
  {activo: false, name:"Papaya", kcal100gr: 45},
  {activo: false, name:"Pera", kcal100gr: 61},
  {activo: false, name:"Piña", kcal100gr: 51},
  {activo: false, name:"Piña en almíbar", kcal100gr: 84},
  {activo: false, name:"Plátano", kcal100gr: 90},
  {activo: false, name:"Banana", kcal100gr: 90},
  {activo: false, name:"Pomelo", kcal100gr: 30},
  {activo: false, name:"Sandía", kcal100gr: 30},
  {activo: false, name:"Uva", kcal100gr: 81},
  {activo: false, name:"Uva pasa", kcal100gr: 324},
  {activo: false, name:"Zumo de fruta", kcal100gr: 45},
  {activo: false, name:"Zumo de Naranja", kcal100gr: 42},
  //FRUTOS SECOS
  {activo: false, name:"Almendras", kcal100gr:620},
  {activo: false, name:"Avellanas", kcal100gr:675},
  {activo: false, name:"Castañas", kcal100gr:199},
  {activo: false, name:"Maní", kcal100gr:560},
  {activo: false, name:"Nueces", kcal100gr:660},
  {activo: false, name:"Piñones", kcal100gr:660},
  {activo: false, name:"Pistacho", kcal100gr:581},
  //LÁCTEOS Y DERIVADO
  {activo: false, name:"Cuajada", kcal100gr:92},
  {activo: false, name:"Flan de huevo",	kcal100gr:126},
  {activo: false, name:"Flan de vainilla",	kcal100gr:102},
  {activo: false, name:"Helados lácteos", kcal100gr:167},
  {activo: false, name:"Leche condensada c/azúcar", kcal100gr:350},
  {activo: false, name:"Leche condensada s/azúcar", kcal100gr:160},
  {activo: false, name:"Leche de cabra",	kcal100gr:72},
  {activo: false, name:"Leche de oveja",	kcal100gr:96},
  {activo: false, name:"Leche descremada", kcal100gr:36},
  {activo: false, name:"Leche en polvo descremada", kcal100gr: 373},
  {activo: false, name:"Leche en polvo entera", kcal100gr: 500},
  {activo: false, name:"Leche entera", kcal100gr:68},
  {activo: false, name:"Leche semi descremada",	kcal100gr:49},
  {activo: false, name:"Mousse", kcal100gr:177},
  {activo: false, name:"Crema de leche", kcal100gr:298},
  {activo: false, name:"Queso blanco desnatado",	kcal100gr:70},
  {activo: false, name:"Queso Brie", kcal100gr:263},
  {activo: false, name:"Queso cammembert", kcal100gr:312},
  {activo: false, name:"Queso cheddar", kcal100gr:381},
  {activo: false, name:"Queso crema", kcal100gr:245},
  {activo: false, name:"Queso de bola", kcal100gr:349},
  {activo: false, name:"Queso de Burgos", kcal100gr:174},
  {activo: false, name:"Queso de oveja", kcal100gr:245},
  {activo: false, name:"Queso edam", kcal100gr:306},
  {activo: false, name:"Queso emmental", kcal100gr:415},
  {activo: false, name:"Queso fundido untable", kcal100gr:285},
  {activo: false, name:"Queso gruyere", kcal100gr:391},
  {activo: false, name:"Queso manchego", kcal100gr:376},
  {activo: false, name:"Queso mozzarella", kcal100gr:245},
  {activo: false, name:"Queso parmesano", kcal100gr:393},
  {activo: false, name:"Queso ricota", kcal100gr:400},
  {activo: false, name:"Queso roquefort", kcal100gr:405},
  {activo: false, name:"Requesón", kcal100gr:96},
  {activo: false, name:"Yogur desnatado", kcal100gr:45},
  {activo: false, name:"Yogur desnatado con frutas", kcal100gr:82},
  {activo: false, name:"Yogur enriquecido con nata", kcal100gr:65},
  {activo: false, name:"Yogur natural", kcal100gr:62},
  {activo: false, name:"Yogur natural con fruta", kcal100gr:100},
  //CARNES, CAZA Y EMBUTIDOS
  {activo: false, name: "Panceta ahumada", kcal100gr: 665},
  {activo: false, name: "Butifarra cocida", kcal100gr: 390},
  {activo: false, name: "Butifarra, salchicha fresca", kcal100gr: 326},
  {activo: false, name: "Cabrito", kcal100gr: 127},
  {activo: false, name: "Cerdo chuleta", kcal100gr: 330},
  {activo: false, name: "Cerdo hígado", kcal100gr: 153},
  {activo: false, name: "Cerdo lomo", kcal100gr: 208},
  {activo: false, name: "Chorizo", kcal100gr: 468},
  {activo: false, name: "Cordero lechón", kcal100gr: 105},
  {activo: false, name: "Cordero pierna", kcal100gr: 98},
  {activo: false, name: "Jamón", kcal100gr: 380},
  {activo: false, name: "Jamón cocido", kcal100gr: 126},
  {activo: false, name: "Jamón crudo", kcal100gr: 296},
  {activo: false, name: "Lengua de vaca", kcal100gr: 191},
  {activo: false, name: "Mortadela", kcal100gr: 265},
  {activo: false, name: "Pollo", kcal100gr: 120},
  {activo: false, name: "Pollo Hígado", kcal100gr: 129},
  {activo: false, name: "Pollo Muslo", kcal100gr: 186},
  {activo: false, name: "Salami", kcal100gr: 325},
  {activo: false, name: "Salchicha Frankfurt", kcal100gr: 315},
  {activo: false, name: "Salchichón", kcal100gr: 294},
  {activo: false, name: "Carne", kcal100gr: 181},
  {activo: false, name: "Bife Ancho", kcal100gr: 181},
  {activo: false, name: "Carne chuleta", kcal100gr: 168},
  {activo: false, name: "Carne hígado", kcal100gr: 230},
  {activo: false, name: "Carne lengua", kcal100gr: 207},
  {activo: false, name: "Carne riñón", kcal100gr: 86},
  {activo: false, name: "Carne sesos", kcal100gr: 125},
  {activo: false, name: "Carne solomillo", kcal100gr: 290},
  {activo: false, name: "Tira de asado", kcal100gr: 401},
  {activo: false, name: "Tripas", kcal100gr: 100},
  //PESCADOS, CRUSTÁCEOS Y MARISCOS
  {activo: false, name: "Almejas", kcal100gr: 50},
  {activo: false, name: "Anchoas", kcal100gr: 175},
  {activo: false, name: "Anguilas", kcal100gr: 200},
  {activo: false, name: "Atún en lata con aceite vegetal", kcal100gr: 280},
  {activo: false, name: "Atún en lata con agua", kcal100gr: 127},
  {activo: false, name: "Atún fresco", kcal100gr: 225},
  {activo: false, name: "Bacalao fresco", kcal100gr: 74},
  {activo: false, name: "Bacalao seco", kcal100gr: 322},
  {activo: false, name: "Besugo", kcal100gr: 118},
  {activo: false, name: "Caballa", kcal100gr: 153},
  {activo: false, name: "Calamar", kcal100gr: 82},
  {activo: false, name: "Cangrejo", kcal100gr: 85},
  {activo: false, name: "Caviar", kcal100gr: 233},
  {activo: false, name: "Congrio", kcal100gr: 112},
  {activo: false, name: "Dorada", kcal100gr: 80},
  {activo: false, name: "Gallo", kcal100gr: 73},
  {activo: false, name: "Gambas", kcal100gr: 96},
  {activo: false, name: "Langosta", kcal100gr: 67},
  {activo: false, name: "Langostino", kcal100gr: 96},
  {activo: false, name: "Lenguado", kcal100gr: 73},
  {activo: false, name: "Lubina", kcal100gr: 118},
  {activo: false, name: "Lucio", kcal100gr: 81},
  {activo: false, name: "Mejillón", kcal100gr: 74},
  {activo: false, name: "Merluza", kcal100gr: 86},
  {activo: false, name: "Mero", kcal100gr: 118},
  {activo: false, name: "Ostras", kcal100gr: 80},
  {activo: false, name: "Pejerrey", kcal100gr: 87},
  {activo: false, name: "Pez espada", kcal100gr: 109},
  {activo: false, name: "Pulpo", kcal100gr: 57},
  {activo: false, name: "Rodaballo", kcal100gr: 81},
  {activo: false, name: "Salmón", kcal100gr: 172},
  {activo: false, name: "Salmón ahumado", kcal100gr: 154},
  {activo: false, name: "Salmonete", kcal100gr: 97},
  {activo: false, name: "Sardina en lata con aceite vegetal", kcal100gr: 192},
  {activo: false, name: "Sardinas", kcal100gr: 151},
  {activo: false, name: "Trucha", kcal100gr: 94},
  //AZÚCARES Y DULCES
  {activo: false, name: "Azúcar", kcal100gr: 380},
  {activo: false, name: "Cacao en polvo con azúcar instantáneo", kcal100gr: 366},
  {activo: false, name: "Caramelos", kcal100gr: 378},
  {activo: false, name: "Chocolate con leche", kcal100gr: 550},
  {activo: false, name: "Chocolate sin leche", kcal100gr: 530},
  {activo: false, name: "Crema chocolate con avellanas", kcal100gr: 549},
  {activo: false, name: "Dulce de membrillo", kcal100gr: 215},
  {activo: false, name: "Helados de agua", kcal100gr: 139},
  {activo: false, name: "Mermeladas con azúcar", kcal100gr: 280},
  {activo: false, name: "Mermeladas sin azúcar", kcal100gr: 145},
  {activo: false, name: "Miel", kcal100gr: 300},
  //CEREALES Y DERIVAD
  {activo: false, name: "Arroz blanco", kcal100gr: 354},
  {activo: false, name: "Arroz integral", kcal100gr: 350},
  {activo: false, name: "Avena", kcal100gr: 367},
  {activo: false, name: "Cebada", kcal100gr: 373},
  {activo: false, name: "Centeno", kcal100gr: 350},
  {activo: false, name: "Cereales con chocolate", kcal100gr: 358},
  {activo: false, name: "Cereales desayuno, con miel", kcal100gr: 386},
  {activo: false, name: "Copos de maíz", kcal100gr: 350},
  {activo: false, name: "Harina de maíz", kcal100gr: 349},
  {activo: false, name: "Harina de trigo integral", kcal100gr: 340},
  {activo: false, name: "Harina de trigo refinada", kcal100gr: 353},
  {activo: false, name: "Pan de centeno", kcal100gr: 241},
  {activo: false, name: "Pan de trigo blanco", kcal100gr: 255},
  {activo: false, name: "Pan de trigo integral", kcal100gr: 239},
  {activo: false, name: "Pan de trigo molde blanco", kcal100gr: 233},
  {activo: false, name: "Pan de trigo molde integral", kcal100gr: 216},
  {activo: false, name: "Pasta al huevo", kcal100gr: 368},
  {activo: false, name: "Pasta de sémola", kcal100gr: 361},
  {activo: false, name: "Polenta", kcal100gr: 358},
  {activo: false, name: "Sémola de trigo", kcal100gr: 368},
  {activo: false, name: "Yuca", kcal100gr: 338},
  //LEGUMBRES
  {activo: false, name: "Garbanzos", kcal100gr: 361},
  {activo: false, name: "Judías", kcal100gr: 343},
  {activo: false, name: "Chaucha", kcal100gr: 343},
  {activo: false, name: "Lentejas", kcal100gr: 336},
  //HUEVOS
  {activo: false, name: "Clara", kcal100gr: 48},
  {activo: false, name: "Huevo duro", kcal100gr: 147},
  {activo: false, name: "Huevo entero", kcal100gr: 162},
  {activo: false, name: "Yema", kcal100gr: 368},
  //PASTELERÍA
  {activo: false, name: "Bizcocho", kcal100gr: 456},
  {activo: false, name: "Croissant chocolate", kcal100gr: 469},
  {activo: false, name: "Croissant, donut", kcal100gr: 456},
  {activo: false, name: "Galletas de chocolate", kcal100gr: 524},
  {activo: false, name: "Galletas de mantequilla tipo “Danesas”", kcal100gr: 397},
  {activo: false, name: "Galletas saladas", kcal100gr: 464},
  {activo: false, name: "Magdalenas", kcal100gr: 469},
  {activo: false, name: "Pasta de hojaldre cocida", kcal100gr: 565},
  {activo: false, name: "Pastel de manzana", kcal100gr: 311},
  {activo: false, name: "Pastel de manzana, masa hojaldre", kcal100gr: 456},
  {activo: false, name: "Pastel de queso", kcal100gr: 414},
  //BEBIDAS
  {activo: false, name: "Agua ardiente", kcal100gr: 280},
  {activo: false, name: "Agua tónica", kcal100gr: 34},
  {activo: false, name: "Anís", kcal100gr: 312},
  {activo: false, name: "Batido lácteo de cacao", kcal100gr: 100},
  {activo: false, name: "Cacao en polvo sin azúcar a la taza", kcal100gr: 439},
  {activo: false, name: "Café", kcal100gr: 1},
  {activo: false, name: "Cerveza negra", kcal100gr: 37},
  {activo: false, name: "Cerveza rubia", kcal100gr: 45},
  {activo: false, name: "Champaña demi-sec", kcal100gr: 90},
  {activo: false, name: "Champaña dulce", kcal100gr: 118},
  {activo: false, name: "Champaña seca", kcal100gr: 85},
  {activo: false, name: "Coñac, brandy", kcal100gr: 243},
  {activo: false, name: "Crema de cacao", kcal100gr: 260},
  {activo: false, name: "Daiquiri", kcal100gr: 122},
  {activo: false, name: "Gin & Tónica", kcal100gr: 76},
  {activo: false, name: "Ginebra", kcal100gr: 244},
  {activo: false, name: "Leche de almendras", kcal100gr: 335},
  {activo: false, name: "Licor de caña", kcal100gr: 273},
  {activo: false, name: "Piña colada", kcal100gr: 194},
  {activo: false, name: "Pisco", kcal100gr: 210},
  {activo: false, name: "Refrescos carbonatados", kcal100gr: 48},
  {activo: false, name: "Ron", kcal100gr: 244},
  {activo: false, name: "Sidra dulce", kcal100gr: 33},
  {activo: false, name: "Sidra seca", kcal100gr: 35},
  {activo: false, name: "Té", kcal100gr: 1},
  {activo: false, name: "Vino de mesa", kcal100gr: 70},
  {activo: false, name: "Vino dulce, jerez", kcal100gr: 160},
  {activo: false, name: "Vodka", kcal100gr: 315},
  {activo: false, name: "Whisky", kcal100gr: 244},
  //ACEITES Y GRASAS
  {activo: false, name: "Aceite de girasol", kcal100gr: 900},
  {activo: false, name: "Aceite de oliva", kcal100gr: 900},
  {activo: false, name: "Manteca", kcal100gr: 670},
  {activo: false, name: "Mantequilla", kcal100gr: 752},
  {activo: false, name: "Margarina vegetal", kcal100gr: 752},
  //SALSAS Y CONDIMENTOS
  {activo: false, name: "Bechamel", kcal100gr: 115},
  {activo: false, name: "Caldos concentrados", kcal100gr: 259},
  {activo: false, name: "Ketchup", kcal100gr: 98},
  {activo: false, name: "Mayonesa", kcal100gr: 718},
  {activo: false, name: "Mayonesa light", kcal100gr: 374},
  {activo: false, name: "Mostaza", kcal100gr: 15},
  {activo: false, name: "Salsa de soja", kcal100gr: 61},
  {activo: false, name: "Salsa de tomate en conserva", kcal100gr: 86},
  {activo: false, name: "Sofrito", kcal100gr: 116},
  {activo: false, name: "Vinagres", kcal100gr: 8}
]