import {
  GET_DAYS,
  GET_RECIPES,
  GET_INGREDIENTS,
  GET_OBJETIVES,
  POST_FOOD,
  SET_INITIAL_STATE,
  LISTS_PURCHASES,
  CHANGE_AMOUNT
  } from './actions'



  let week = [ 
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
    }]








  const initialState = {
    dataAlreadyLoad:false,   
    fullWeek: [],
    actualDay:{},
    objective: 2000,
    recipes:[],
    ingredients:[],
    purchases:[],
    newPurchaseList:[],

    week:week
  };

  const rootReducer = (state = initialState, action) => {
  switch(action.type) {



    case CHANGE_AMOUNT:
      const [listID, nameIngredient, amount] = action.payload
      const changeAmounts = state.purchases.map(list=>{
        if(list.id === listID){
          list.ingredients.map(ingredient=>{ 
            if(ingredient.name===nameIngredient) {
              ingredient.amount = amount 
            }
            return ingredient
          }
          )}
          return list
      })
      return {
        ...state,
        purchases: changeAmounts
    }

    //[
      //   {
      //     id: "blabla",
      //     name: "Nombre de lista"
      //     ingredients: [{name: "pollo", amount: 250}, {name: "lechuga", amount: 100} ]
      //   },
      //   {
      //     id: "terotero",
      //     name: "Compras"
      //     ingredients:[{name: "cebolla", amount: 1}, {name: "tomate", amount: 2} ]
      //   }
      // ]



    case LISTS_PURCHASES:
      return {
        ...state,
        purchases: action.payload
    }
    case SET_INITIAL_STATE:
      return {
        ...state,
        dataAlreadyLoad: true,
        actualDay: action.payload.day,
        ingredients: action.payload.ingredients,
        recipes: action.payload.recipes
    }

    case GET_DAYS:
      const lastDay = action.payload.filter(day => day.day === 'Tuesday')
      return {
        ...state,
        fullWeek: action.payload,
        actualDay: lastDay[1]
    }
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload
    }
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload
    }
    case GET_OBJETIVES:
      return {
        ...state,
        objetives: action.payload
    }
    case POST_FOOD:
      return {
        ...state,
        fullWeek: action.payload,
    }

  

  default: return state
  };
  };

  export default rootReducer;

