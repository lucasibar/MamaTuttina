import {
  GET_DAYS,
  GET_RECIPES,
  GET_INGREDIENTS,
  GET_OBJETIVES,
  POST_FOOD,
  SET_INITIAL_STATE,
  LISTS_PURCHASES,
  CHANGE_AMOUNT_INGREDIENT_PURCHASES,
  NEW_LISTS_PURCHASES
  } from './actions'
  const initialState = {
    dataAlreadyLoad:false,
    
    fullWeek: [],
    actualDay:{},
    objective: 2000,
    recipes:[],
    ingredients:[],

    purchases:[]
  };

  const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_AMOUNT_INGREDIENT_PURCHASES:
      return {
        ...state,
        purchases: state.purchases.map(purchaseList=>{
          if(purchaseList.id===action.payload.listID) return "a"
          return purchaseList
        })
    }

    case LISTS_PURCHASES:
      return {
        ...state,
        purchases: action.payload
    }
    case NEW_LISTS_PURCHASES:
      return {
        ...state,
        purchases: state.purchases.push({
          name: action.payload.name,
		      Ingredients: [
            {
              "name": "pure",
              "PurchaseListIngredients": {
                "amount": 0
              }
            }
		      ]
        })
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

