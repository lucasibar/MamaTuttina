import {
  GET_DAYS,
  GET_RECIPES,
  GET_INGREDIENTS,
  GET_OBJETIVES,
  POST_FOOD,
  SET_INITIAL_STATE
  } from './actions'
  const initialState = {
    dataAlreadyLoad:false,
    
    fullWeek: [],
    actualDay:{},
    objective: 2000,
    recipes:[],
    ingredients:[]
  };

  const rootReducer = (state = initialState, action) => {
  switch(action.type) {
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

