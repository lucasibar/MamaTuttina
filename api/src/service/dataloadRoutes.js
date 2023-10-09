const { Router } = require("express");
const {Days, Recipes, Ingredients} = require("../db");

const dataloadRoutes = Router();

const ingredientes = [
  //VERDURAS Y HORTALIZAS    
  {activo: false, name:"Aceitunas negras", Kcal: 349, fat:35},
  {activo: false, name:"Aceitunas verdes", Kcal: 132},
  {activo: false, name:"Acelgas", Kcal: 33},
  {activo: false, name:"Ajos", Kcal: 169},
  {activo: false, name:"Alcachofas", Kcal: 64},
  {activo: false, name:"Apio", Kcal: 20},
  {activo: false, name:"Berenjena", Kcal: 29},
  {activo: false, name:"Berros", Kcal: 21},
  {activo: false, name:"Brócoli", Kcal: 31},
  {activo: false, name:"Calabacín", Kcal: 31},
  {activo: false, name:"Calabaza", Kcal: 24},
  {activo: false, name:"Cebolla", Kcal: 47},
  {activo: false, name:"Cebolla tierna", Kcal: 39},
  {activo: false, name:"Champiñón y otras setas", Kcal: 28},
  {activo: false, name:"Col", Kcal: 28},
  {activo: false, name:"Col de Bruselas", Kcal: 54},
  {activo: false, name:"Coliflor", Kcal: 30},
  {activo: false, name:"Endibia", Kcal: 22},
  {activo: false, name:"Escarola", Kcal: 37},
  {activo: false, name:"Espárragos", Kcal: 26},
  {activo: false, name:"Espinaca", Kcal: 32},
  {activo: false, name:"Habas tiernas", Kcal: 64},
  {activo: false, name:"Hinojo", Kcal: 16},
  {activo: false, name:"Lechuga", Kcal: 18},
  {activo: false, name:"Nabos", Kcal: 29},
  {activo: false, name:"Papas cocidas", Kcal: 86},
  {activo: false, name:"Pepino", Kcal: 12},
  {activo: false, name:"Perejil", Kcal: 55},
  {activo: false, name:"Pimiento", Kcal: 22},
  {activo: false, name:"Morron", Kcal: 22},
  {activo: false, name:"Porotos verdes", Kcal: 21},
  {activo: false, name:"Puerros", Kcal: 42},
  {activo: false, name:"Rábanos", Kcal: 20},
  {activo: false, name:"Remolacha", Kcal: 40},
  {activo: false, name:"Repollo", Kcal: 19},
  {activo: false, name:"Rúcula", Kcal: 37},
  {activo: false, name:"Brotes de Soja", Kcal: 50},
  {activo: false, name:"Tomate triturado en conserva", Kcal: 39},
  {activo: false, name:"Tomates", Kcal: 22},
  {activo: false, name:"Zanahoria", Kcal: 42},
  {activo: false, name:"Zumo de tomate", Kcal: 21},
  {activo: false, name:"Zapallitos", Kcal: 16},
  {activo: false, name:"Zapallo", Kcal: 57},
  //FRUTAS
  {activo: false, name:"Arándanos", Kcal: 41},
  {activo: false, name:"Cereza", Kcal: 47},
  {activo: false, name:"Ciruela", Kcal: 44},
  {activo: false, name:"Ciruela seca", Kcal: 290},
  {activo: false, name:"Coco", Kcal: 646},
  {activo: false, name:"Dátil", Kcal: 279},
  {activo: false, name:"Dátil seco", Kcal: 306},
  {activo: false, name:"Frambuesa", Kcal: 40},
  {activo: false, name:"Fresas", Kcal: 36},
  {activo: false, name:"Granada", Kcal: 65},
  {activo: false, name:"Grosella", Kcal: 37},
  {activo: false, name:"Higos", Kcal: 80},
  {activo: false, name:"Higos secos", Kcal: 275},
  {activo: false, name:"Kiwi", Kcal: 51},
  {activo: false, name:"Limón", Kcal: 39},
  {activo: false, name:"Mandarina", Kcal: 40},
  {activo: false, name:"Mango", Kcal: 57},
  {activo: false, name:"Manzana", Kcal: 52},
  {activo: false, name:"Melón", Kcal: 31},
  {activo: false, name:"Mora", Kcal: 37},
  {activo: false, name:"Naranja", Kcal: 44},
  {activo: false, name:"Nectarina", Kcal: 64},
  {activo: false, name:"Nísperos", Kcal: 97},
  {activo: false, name:"Papaya", Kcal: 45},
  {activo: false, name:"Pera", Kcal: 61},
  {activo: false, name:"Piña", Kcal: 51},
  {activo: false, name:"Piña en almíbar", Kcal: 84},
  {activo: false, name:"Plátano", Kcal: 90},
  {activo: false, name:"Banana", Kcal: 90},
  {activo: false, name:"Pomelo", Kcal: 30},
  {activo: false, name:"Sandía", Kcal: 30},
  {activo: false, name:"Uva", Kcal: 81},
  {activo: false, name:"Uva pasa", Kcal: 324},
  {activo: false, name:"Zumo de fruta", Kcal: 45},
  {activo: false, name:"Zumo de Naranja", Kcal: 42},
  //FRUTOS SECOS
  {activo: false, name:"Almendras", Kcal:620},
  {activo: false, name:"Avellanas", Kcal:675},
  {activo: false, name:"Castañas", Kcal:199},
  {activo: false, name:"Maní", Kcal:560},
  {activo: false, name:"Nueces", Kcal:660},
  {activo: false, name:"Piñones", Kcal:660},
  {activo: false, name:"Pistacho", Kcal:581},
  //LÁCTEOS Y DERIVADO
  {activo: false, name:"Cuajada", Kcal:92},
  {activo: false, name:"Flan de huevo",	Kcal:126},
  {activo: false, name:"Flan de vainilla",	Kcal:102},
  {activo: false, name:"Helados lácteos", Kcal:167},
  {activo: false, name:"Leche condensada c/azúcar", Kcal:350},
  {activo: false, name:"Leche condensada s/azúcar", Kcal:160},
  {activo: false, name:"Leche de cabra",	Kcal:72},
  {activo: false, name:"Leche de oveja",	Kcal:96},
  {activo: false, name:"Leche descremada", Kcal:36},
  {activo: false, name:"Leche en polvo descremada", Kcal: 373},
  {activo: false, name:"Leche en polvo entera", Kcal: 500},
  {activo: false, name:"Leche entera", Kcal:68},
  {activo: false, name:"Leche semi descremada",	Kcal:49},
  {activo: false, name:"Mousse", Kcal:177},
  {activo: false, name:"Crema de leche", Kcal:298},
  {activo: false, name:"Queso blanco desnatado",	Kcal:70},
  {activo: false, name:"Queso Brie", Kcal:263},
  {activo: false, name:"Queso cammembert", Kcal:312},
  {activo: false, name:"Queso cheddar", Kcal:381},
  {activo: false, name:"Queso crema", Kcal:245},
  {activo: false, name:"Queso de bola", Kcal:349},
  {activo: false, name:"Queso de Burgos", Kcal:174},
  {activo: false, name:"Queso de oveja", Kcal:245},
  {activo: false, name:"Queso edam", Kcal:306},
  {activo: false, name:"Queso emmental", Kcal:415},
  {activo: false, name:"Queso fundido untable", Kcal:285},
  {activo: false, name:"Queso gruyere", Kcal:391},
  {activo: false, name:"Queso manchego", Kcal:376},
  {activo: false, name:"Queso mozzarella", Kcal:245},
  {activo: false, name:"Queso parmesano", Kcal:393},
  {activo: false, name:"Queso ricota", Kcal:400},
  {activo: false, name:"Queso roquefort", Kcal:405},
  {activo: false, name:"Requesón", Kcal:96},
  {activo: false, name:"Yogur desnatado", Kcal:45},
  {activo: false, name:"Yogur desnatado con frutas", Kcal:82},
  {activo: false, name:"Yogur enriquecido con nata", Kcal:65},
  {activo: false, name:"Yogur natural", Kcal:62},
  {activo: false, name:"Yogur natural con fruta", Kcal:100},
  //CARNES, CAZA Y EMBUTIDOS
  {activo: false, name: "Panceta ahumada", Kcal: 665},
  {activo: false, name: "Butifarra cocida", Kcal: 390},
  {activo: false, name: "Butifarra, salchicha fresca", Kcal: 326},
  {activo: false, name: "Cabrito", Kcal: 127},
  {activo: false, name: "Cerdo chuleta", Kcal: 330},
  {activo: false, name: "Cerdo hígado", Kcal: 153},
  {activo: false, name: "Cerdo lomo", Kcal: 208},
  {activo: false, name: "Chorizo", Kcal: 468},
  {activo: false, name: "Cordero lechón", Kcal: 105},
  {activo: false, name: "Cordero pierna", Kcal: 98},
  {activo: false, name: "Jamón", Kcal: 380},
  {activo: false, name: "Jamón cocido", Kcal: 126},
  {activo: false, name: "Jamón crudo", Kcal: 296},
  {activo: false, name: "Lengua de vaca", Kcal: 191},
  {activo: false, name: "Mortadela", Kcal: 265},
  {activo: false, name: "Pollo", Kcal: 120},
  {activo: false, name: "Pollo Hígado", Kcal: 129},
  {activo: false, name: "Pollo Muslo", Kcal: 186},
  {activo: false, name: "Salami", Kcal: 325},
  {activo: false, name: "Salchicha Frankfurt", Kcal: 315},
  {activo: false, name: "Salchichón", Kcal: 294},
  {activo: false, name: "Carne", Kcal: 181},
  {activo: false, name: "Bife Ancho", Kcal: 181},
  {activo: false, name: "Carne chuleta", Kcal: 168},
  {activo: false, name: "Carne hígado", Kcal: 230},
  {activo: false, name: "Carne lengua", Kcal: 207},
  {activo: false, name: "Carne riñón", Kcal: 86},
  {activo: false, name: "Carne sesos", Kcal: 125},
  {activo: false, name: "Carne solomillo", Kcal: 290},
  {activo: false, name: "Tira de asado", Kcal: 401},
  {activo: false, name: "Tripas", Kcal: 100},
  //PESCADOS, CRUSTÁCEOS Y MARISCOS
  {activo: false, name: "Almejas", Kcal: 50},
  {activo: false, name: "Anchoas", Kcal: 175},
  {activo: false, name: "Anguilas", Kcal: 200},
  {activo: false, name: "Atún en lata con aceite vegetal", Kcal: 280},
  {activo: false, name: "Atún en lata con agua", Kcal: 127},
  {activo: false, name: "Atún fresco", Kcal: 225},
  {activo: false, name: "Bacalao fresco", Kcal: 74},
  {activo: false, name: "Bacalao seco", Kcal: 322},
  {activo: false, name: "Besugo", Kcal: 118},
  {activo: false, name: "Caballa", Kcal: 153},
  {activo: false, name: "Calamar", Kcal: 82},
  {activo: false, name: "Cangrejo", Kcal: 85},
  {activo: false, name: "Caviar", Kcal: 233},
  {activo: false, name: "Congrio", Kcal: 112},
  {activo: false, name: "Dorada", Kcal: 80},
  {activo: false, name: "Gallo", Kcal: 73},
  {activo: false, name: "Gambas", Kcal: 96},
  {activo: false, name: "Langosta", Kcal: 67},
  {activo: false, name: "Langostino", Kcal: 96},
  {activo: false, name: "Lenguado", Kcal: 73},
  {activo: false, name: "Lubina", Kcal: 118},
  {activo: false, name: "Lucio", Kcal: 81},
  {activo: false, name: "Mejillón", Kcal: 74},
  {activo: false, name: "Merluza", Kcal: 86},
  {activo: false, name: "Mero", Kcal: 118},
  {activo: false, name: "Ostras", Kcal: 80},
  {activo: false, name: "Pejerrey", Kcal: 87},
  {activo: false, name: "Pez espada", Kcal: 109},
  {activo: false, name: "Pulpo", Kcal: 57},
  {activo: false, name: "Rodaballo", Kcal: 81},
  {activo: false, name: "Salmón", Kcal: 172},
  {activo: false, name: "Salmón ahumado", Kcal: 154},
  {activo: false, name: "Salmonete", Kcal: 97},
  {activo: false, name: "Sardina en lata con aceite vegetal", Kcal: 192},
  {activo: false, name: "Sardinas", Kcal: 151},
  {activo: false, name: "Trucha", Kcal: 94},
  //AZÚCARES Y DULCES
  {activo: false, name: "Azúcar", Kcal: 380},
  {activo: false, name: "Cacao en polvo con azúcar instantáneo", Kcal: 366},
  {activo: false, name: "Caramelos", Kcal: 378},
  {activo: false, name: "Chocolate con leche", Kcal: 550},
  {activo: false, name: "Chocolate sin leche", Kcal: 530},
  {activo: false, name: "Crema chocolate con avellanas", Kcal: 549},
  {activo: false, name: "Dulce de membrillo", Kcal: 215},
  {activo: false, name: "Helados de agua", Kcal: 139},
  {activo: false, name: "Mermeladas con azúcar", Kcal: 280},
  {activo: false, name: "Mermeladas sin azúcar", Kcal: 145},
  {activo: false, name: "Miel", Kcal: 300},
  //CEREALES Y DERIVAD
  {activo: false, name: "Arroz blanco", Kcal: 354},
  {activo: false, name: "Arroz integral", Kcal: 350},
  {activo: false, name: "Avena", Kcal: 367},
  {activo: false, name: "Cebada", Kcal: 373},
  {activo: false, name: "Centeno", Kcal: 350},
  {activo: false, name: "Cereales con chocolate", Kcal: 358},
  {activo: false, name: "Cereales desayuno, con miel", Kcal: 386},
  {activo: false, name: "Copos de maíz", Kcal: 350},
  {activo: false, name: "Harina de maíz", Kcal: 349},
  {activo: false, name: "Harina de trigo integral", Kcal: 340},
  {activo: false, name: "Harina de trigo refinada", Kcal: 353},
  {activo: false, name: "Pan de centeno", Kcal: 241},
  {activo: false, name: "Pan de trigo blanco", Kcal: 255},
  {activo: false, name: "Pan de trigo integral", Kcal: 239},
  {activo: false, name: "Pan de trigo molde blanco", Kcal: 233},
  {activo: false, name: "Pan de trigo molde integral", Kcal: 216},
  {activo: false, name: "Pasta al huevo", Kcal: 368},
  {activo: false, name: "Pasta de sémola", Kcal: 361},
  {activo: false, name: "Polenta", Kcal: 358},
  {activo: false, name: "Sémola de trigo", Kcal: 368},
  {activo: false, name: "Yuca", Kcal: 338},
  //LEGUMBRES
  {activo: false, name: "Garbanzos", Kcal: 361},
  {activo: false, name: "Judías", Kcal: 343},
  {activo: false, name: "Chaucha", Kcal: 343},
  {activo: false, name: "Lentejas", Kcal: 336},
  //HUEVOS
  {activo: false, name: "Clara", Kcal: 48},
  {activo: false, name: "Huevo duro", Kcal: 147},
  {activo: false, name: "Huevo entero", Kcal: 162},
  {activo: false, name: "Yema", Kcal: 368},
  //PASTELERÍA
  {activo: false, name: "Bizcocho", Kcal: 456},
  {activo: false, name: "Croissant chocolate", Kcal: 469},
  {activo: false, name: "Croissant, donut", Kcal: 456},
  {activo: false, name: "Galletas de chocolate", Kcal: 524},
  {activo: false, name: "Galletas de mantequilla tipo “Danesas”", Kcal: 397},
  {activo: false, name: "Galletas saladas", Kcal: 464},
  {activo: false, name: "Magdalenas", Kcal: 469},
  {activo: false, name: "Pasta de hojaldre cocida", Kcal: 565},
  {activo: false, name: "Pastel de manzana", Kcal: 311},
  {activo: false, name: "Pastel de manzana, masa hojaldre", Kcal: 456},
  {activo: false, name: "Pastel de queso", Kcal: 414},
  //BEBIDAS
  {activo: false, name: "Agua ardiente", Kcal: 280},
  {activo: false, name: "Agua tónica", Kcal: 34},
  {activo: false, name: "Anís", Kcal: 312},
  {activo: false, name: "Batido lácteo de cacao", Kcal: 100},
  {activo: false, name: "Cacao en polvo sin azúcar a la taza", Kcal: 439},
  {activo: false, name: "Café", Kcal: 1},
  {activo: false, name: "Cerveza negra", Kcal: 37},
  {activo: false, name: "Cerveza rubia", Kcal: 45},
  {activo: false, name: "Champaña demi-sec", Kcal: 90},
  {activo: false, name: "Champaña dulce", Kcal: 118},
  {activo: false, name: "Champaña seca", Kcal: 85},
  {activo: false, name: "Coñac, brandy", Kcal: 243},
  {activo: false, name: "Crema de cacao", Kcal: 260},
  {activo: false, name: "Daiquiri", Kcal: 122},
  {activo: false, name: "Gin & Tónica", Kcal: 76},
  {activo: false, name: "Ginebra", Kcal: 244},
  {activo: false, name: "Leche de almendras", Kcal: 335},
  {activo: false, name: "Licor de caña", Kcal: 273},
  {activo: false, name: "Piña colada", Kcal: 194},
  {activo: false, name: "Pisco", Kcal: 210},
  {activo: false, name: "Refrescos carbonatados", Kcal: 48},
  {activo: false, name: "Ron", Kcal: 244},
  {activo: false, name: "Sidra dulce", Kcal: 33},
  {activo: false, name: "Sidra seca", Kcal: 35},
  {activo: false, name: "Té", Kcal: 1},
  {activo: false, name: "Vino de mesa", Kcal: 70},
  {activo: false, name: "Vino dulce, jerez", Kcal: 160},
  {activo: false, name: "Vodka", Kcal: 315},
  {activo: false, name: "Whisky", Kcal: 244},
  //ACEITES Y GRASAS
  {activo: false, name: "Aceite de girasol", Kcal: 900},
  {activo: false, name: "Aceite de oliva", Kcal: 900},
  {activo: false, name: "Manteca", Kcal: 670},
  {activo: false, name: "Mantequilla", Kcal: 752},
  {activo: false, name: "Margarina vegetal", Kcal: 752},
  //SALSAS Y CONDIMENTOS
  {activo: false, name: "Bechamel", Kcal: 115},
  {activo: false, name: "Caldos concentrados", Kcal: 259},
  {activo: false, name: "Ketchup", Kcal: 98},
  {activo: false, name: "Mayonesa", Kcal: 718},
  {activo: false, name: "Mayonesa light", Kcal: 374},
  {activo: false, name: "Mostaza", Kcal: 15},
  {activo: false, name: "Salsa de soja", Kcal: 61},
  {activo: false, name: "Salsa de tomate en conserva", Kcal: 86},
  {activo: false, name: "Sofrito", Kcal: 116},
  {activo: false, name: "Vinagres", Kcal: 8}
]
const organizarmeLoMio = [
  {
    dayId:1,
    day:"Lunes",
    lunch:{
        id:"lunch1",
        name:'Ensalada Chaucha y Papa',
        category:"Legumbre",
        ingredients:[
            {
            name:"papa",
            amount:300,
            unit:"grams"
            },
            {name:"chaucha",
            amount:300,
            unit:"grams"
            }
          ]
    },
    dinner:{
        name:'Bife con mixta',
        ingredients:[
          {nameIngredient:"Bife angosto",
          amount:300,
          unit:"grams"
          },
          {nameIngredient:"lechuga",
          amount:0.5,
          unit:"units"
          },
          {nameIngredient:"tomate",
          amount:1,
          unit:"units"
          },
          {nameIngredient:"cebolla",
          amount:0.5,
          unit:"units"
          }
        ]
    },
    extra:''  
  },
  {
    dayId:2,
    day:"Martes",
    lunch:'Pasta con verduras y salsa de soja(Pollo) ',
    dinner:'Paella',
    extra:'Mate y Pepas'  
  },
  {
    dayId:3,
    day:"Miecoles",
    lunch:'Ensalada de Pollo, Tomate y Cebolla',
    dinner:'Paella',
    extra:'Ensalada de Frutas'  
  },
  {
    dayId:4,
    day:"Jueves",
    lunch:'Milanesa de Soja con ensalada verde',
    dinner:'sardinas con Romero',
    extra:'Pinchos de aceituna, morron y queso fresco marinado'  
  }, 
  {
    dayId:5,
    day:"Viernes",
    lunch:'Arroz',
    dinner:'Hamburguesa',
    extra:'CocaCola'  
  }, 
  {
    dayId:6,
    day:"Sabado",
    lunch:'Ensalada Cesar bien hecha;)',
    dinner:'Pollo Fritas',
    extra:'Panaderia'  
  }, 
  {
    dayId:7,
    day:"Domingo",
    lunch:'Pasta rellena',
    dinner:'Asado',
    extra:'Torta'  
  }
] 
const recetas = [
    
  
  {name:'Ensalada de Frutas',
  ingredients:[
    {nameIngredient:"banana",
    amount:1,
    unit:"units"
    },
    {nameIngredient:"Manzana",
    amount:1,
    unit:"units"
    },
    {nameIngredient:"Naranja",
    amount:3,
    unit:"units"
    },
    {nameIngredient:"cereza",
    amount:250,
    unit:"grams"
    }
  ]
  },
  {
    name:'Pasta con verduras y salsa de soja(Pollo)',
    ingredients:[
      {nameIngredient:"pasta",
      amount:0.2,
      unit:"units"
      },
      {nameIngredient:"Berenjena",
      amount:0.5,
      unit:"units"
      },
      {nameIngredient:"Zapallito",
      amount:2,
      unit:"units"
      },
      {nameIngredient:"Zanahoria",
      amount:0.5,
      unit:"units"
      },
      {nameIngredient:"Cebolla",
      amount:1,
      unit:"units"
      },
      {nameIngredient:"Morron",
      amount:0.25,
      unit:"units"
      },
      {nameIngredient:"Salsa de soja",
      amount:0.01,
      unit:"units"
      }
    ]
    },
    {
      name:'Mate y Pepas',
      ingredients:[
        {nameIngredient:"mate",
        amount:1,
        unit:"units"
        },
        {nameIngredient:"pepas",
        amount:1,
        unit:"units"
        }
      ]
      },
      {name:'Ensalada de Pollo, Tomate y Cebolla',
      ingredients:[
        {nameIngredient:"pollo",
        amount:250,
        unit:"grams"
        },
        {nameIngredient:"tomate",
        amount:1,
        unit:"units"
        },
        {nameIngredient:"cebolla",
        amount:0.5,
        unit:"units"
        }
      ]
      },
      {name:'Paella',
      ingredients:[
        {nameIngredient:"Arroz",
        amount:150,
        unit:"grams"
        },
        {nameIngredient:"Variado de mariscos",
        amount:1,
        unit:"units"
        },
        {nameIngredient:"Tomate",
        amount:1,
        unit:"units"
        }
      ]
      },
      {name:'Milanesa de Soja con ensalada verde',
      ingredients:[
        {nameIngredient:"Milanesa de Soja",
        amount:1,
        unit:"units"
        },
        {nameIngredient:"Lechuga",
        amount:0.5,
        unit:"units"
        },
        {nameIngredient:"Rucula",
        amount:1,
        unit:"units"
        }
      ]
      },
      {name:'sardinas con Romero',
      ingredients:[
        {nameIngredient:"Sardinas",
        amount:2,
        unit:"units"
        }
      ]
      },
      {name:'Pinchos de aceituna, morron y queso fresco marinado',
      ingredients:[
        {nameIngredient:"Aceitunas",
        amount:100,
        unit:"grams"
        },
        {nameIngredient:"Morron",
        amount:1,
        unit:"units"
        },
        {nameIngredient:"Queso fresco",
        amount:300,
        unit:"grams"
        }
      ]
      },
      {name:'Arroz',
      ingredients:[
        {nameIngredient:"Arroz",
        amount:300,
        unit:"grams"
        }
      ]
      },
      {name:'Hamburguesa',
      ingredients:[
        {nameIngredient:"Picada",
        amount:500,
        unit:"grams"
        },
        {nameIngredient:"Pan Artesanal",
        amount:2,
        unit:"units"
        },
        {nameIngredient:"Cheddar",
        amount:1,
        unit:"units"
        }
      ]
      },
      {name:'CocaCola',
      ingredients:[
        {nameIngredient:"CocaCola",
        amount:300,
        unit:"grams"
        }
      ]
      },
      {name:'Ensalada Cesar bien hecha;)',
      ingredients:[
        {nameIngredient:"Lechuga",
        amount:1,
        unit:"units"
        },
        {nameIngredient:"Leche",
        amount:100,
        unit:"mililitres"
        },
        {nameIngredient:"Queso untable",
        amount:150,
        unit:"grams"
        },
        {nameIngredient:"Anchoas",
        amount:0.50,
        unit:"units"
        },
        
        {nameIngredient:"Ajo",
        amount:0.50,
        unit:"units"
        },
        {nameIngredient:"Parmesano",
        amount:100,
        unit:"grams"
        },
        {nameIngredient:"Pollo",
        amount:150,
        unit:"grams"
        },
        {nameIngredient:"Pan",
        amount:100,
        unit:"grams"
        }
      ]
      },
      {name:'Pollo Fritas',
      ingredients:[
        {nameIngredient:"Pollo",
        amount:300,
        unit:"grams"
        },
        {nameIngredient:"Papa",
        amount:300,
        unit:"grams"
        }
      ]
      },
      {name:'Panqueques con Dulce de Leche',
      ingredients:[
        {nameIngredient:"Leche",
        amount:250,
        unit:"mililiters"
        },
        {nameIngredient:"Harina",
        amount:150,
        unit:"grams"
        },
        {nameIngredient:"Huevo",
        amount:1,
        unit:"grams"
        },
        {nameIngredient:"Dulce de Leche",
        amount:150,
        unit:"grams"
        }
      ]
      },
      {name:'Pasta rellena',
      ingredients:[
        {nameIngredient:"Pasta rellena",
        amount:300,
        unit:"grams"
        }
      ]
      },
      {nameIngredient:'Asado',
      ingredients:[
        {nameIngredient:"Asado",
        amount:500,
        unit:"grams"
        }
      ]
      },
      {name:'Torta',
      ingredients:[
        {nameIngredient:"Torta",
        amount:1,
        unit:"units"
        }
      ]
      }
]
const week = [ 
      {day:'Lunes',
      dayId:1,
      lunchCategory:'Legumbre',
      dinnerCategory:'Carne',
      extraCategory:'Lacteo'  
      },
      {day:'Martes',
      dayId:2,
      lunchCategory:'Pasta',
      dinnerCategory:'Pescado',
      extraCategory:'Panificado'  
      }, 
      {day:'Miercoles',
      dayId:3,
      lunchCategory:'Carne',
      dinnerCategory:'Arroz',
      extraCategory:'Fruta'  
      }, 
      {day:'Jueves',
      dayId:4,
      lunchCategory:'Legumbre',
      dinnerCategory:'Pescado',
      extraCategory:'Lacteo'  
      }, 
      {day:'Viernes',
      dayId:5,
      lunchCategory:'Arroz',
      dinnerCategory:'Carne',
      extraCategory:'Permitidos'  
      },
      {day:'Sabado',
      dayId:6,
      lunchCategory:'Pescado',
      dinnerCategory:'Pollo',
      extraCategory:'Panificado'  
      },
      {day:'Domingo',
      dayId:7,
      lunchCategory:'Pasta',
      dinnerCategory:'Carne',
      extraCategory:'Permitidos'  
      }
]

dataloadRoutes.get("/", async (req, res) => {
  try{
    //MOCK INFO
    await Ingredients.bulkCreate(ingredientes)

    await Recipes.create({
      name:"Bife con Pure",
      category: 'Carne',
    })
    await Recipes.create({
      name:"Almuerzo",
      category: 'None',
    })
    await Recipes.create({
      name:"Cena",
      category: 'None',
    })    
    await Recipes.create({
      name:"Extra",
      category: 'None',
    })

    await Days.create({
      name:"Lunes",
      number:1
    })
    await Days.create({
      name:"Martes",
      number:2,
      actualDay: true,
    })
    await Days.create({
      name:"Miercoles",
      number:3,

    })
    await Days.create({
      name:"Jueves",
      number:4,
    })
    await Days.create({
      name:"Viernes",
      number:5,
    })
    await Days.create({
      name:"Sabado",
      number:6,
    })
    await Days.create({
      name:"Domingo",
      number:7,
    })
    

    //TRAIGO LOS COMPONENTES
    const martes = await Days.findOne({where:{name: 'Martes'}})
    const lunes = await Days.findOne({where:{name: 'Lunes'}})
    const miercoles = await Days.findOne({where:{name: 'Miercoles'}})
    const jueves = await Days.findOne({where:{name: 'Jueves'}})
    const viernes = await Days.findOne({where:{name: 'Viernes'}})
    const sabado = await Days.findOne({where:{name: 'Sabado'}})
    const domingo = await Days.findOne({where:{name: 'Domingo'}})
    

    const bifeconPure = await Recipes.findOne({where:{name: 'Bife con Pure'}})
    const Almuerzo = await Recipes.findOne({where:{name: 'Almuerzo'}})
    const Cena= await Recipes.findOne({where:{name: 'Cena'}})
    const Extra= await Recipes.findOne({where:{name: 'Extra'}})


    const bife = await Ingredients.findOne({where:{name: "Leche descremada"}})
    const papas = await Ingredients.findOne({where:{name: "Papas cocidas"}})
    const leche = await Ingredients.findOne({where:{name: "Bife Ancho"}})

    //LOS RELACIONO
    await bifeconPure.addIngredient(bife, { through: { amount: 350, unit: 'gr' } })
    await bifeconPure.addIngredient(papas, { through: { amount: 200, unit: 'gr' } })
    await bifeconPure.addIngredient(leche, { through: { amount: 150, unit: 'ml' } })


    await martes.addRecipe(bifeconPure, { through: { meal: 'Almuerzo'} })
    await martes.addRecipe(Cena, { through: { meal: 'Cena'} })
    await martes.addRecipe(Extra, { through: { meal: 'Extra'} })
    
    await lunes.addRecipe(Almuerzo, { through: { meal: 'Almuerzo'} })
    await lunes.addRecipe(Cena, { through: { meal: 'Cena'} })
    await lunes.addRecipe(Extra, { through: { meal: 'Extra'} })
    await miercoles.addRecipe(Almuerzo, { through: { meal: 'Almuerzo'} })
    await miercoles.addRecipe(Cena, { through: { meal: 'Cena'} })
    await miercoles.addRecipe(Extra, { through: { meal: 'Extra'} })
    await jueves.addRecipe(Almuerzo, { through: { meal: 'Almuerzo'} })
    await jueves.addRecipe(Cena, { through: { meal: 'Cena'} })
    await jueves.addRecipe(Extra, { through: { meal: 'Extra'} })
    await viernes.addRecipe(Almuerzo, { through: { meal: 'Almuerzo'} })
    await viernes.addRecipe(Cena, { through: { meal: 'Cena'} })
    await viernes.addRecipe(Extra, { through: { meal: 'Extra'} })
    await sabado.addRecipe(Almuerzo, { through: { meal: 'Almuerzo'} })
    await sabado.addRecipe(Cena, { through: { meal: 'Cena'} })
    await sabado.addRecipe(Extra, { through: { meal: 'Extra'} })
    await domingo.addRecipe(Almuerzo, { through: { meal: 'Almuerzo'} })
    await domingo.addRecipe(Cena, { through: { meal: 'Cena'} })
    await domingo.addRecipe(Extra, { through: { meal: 'Extra'} })
    
    res.status(200).json("Data mock cargada")
  }
  catch(error){res.status(400).json({ Error: error.message })} 
});

module.exports = dataloadRoutes;


