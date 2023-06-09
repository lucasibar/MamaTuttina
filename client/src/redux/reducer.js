import {
  GET_DAYS,
  GET_RECIPES,
  GET_INGREDIENTS,
  GET_OBJETIVES
  } from './actions'
  const initialState = {
    fullWeek: [],
    actualDay:{},
    objective: 2000,
    recipes:[],
    ingredients:[]
  };

  const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_DAYS:
      const lastDay = action.payload.filter(day => day.day === 'Tuesday')
      return {
        ...state,
        fullWeek: action.payload,
        actualDay: lastDay[0]
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
  

  default: return state
  };
  };

  export default rootReducer;

