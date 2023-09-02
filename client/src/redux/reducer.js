import {
  GET_DAYS,
  GET_RECIPES,
  GET_INGREDIENTS,
  GET_OBJETIVES,
  POST_FOOD,
  SET_INITIAL_STATE,
  LISTS_PURCHASES,
  CHANGE_AMOUNT,
  GET_DAY
  } from './actions'


  import {
    organizarmeLoMio,
    recetas,
    week
    } from './db'
  


  
  const initialState = {
    dataAlreadyLoad:false,   
    fullWeek: [],
    actualDay:{},
    objective: 2000,
    recipes:[],
    ingredients:[],
    purchases:[],
    newPurchaseList:[],
    day: {},
    week:week
  };

  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case GET_INGREDIENTS:
        return {
          ...state,
          ingredients: action.payload
      }
      case GET_DAY:
        return {
          ...state,
          day: action.payload
      }
      
      
      
      
      
      




      
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

