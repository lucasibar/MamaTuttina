import {
  GET_DAYS,
  GET_DAY_RECIPES,
  GET_INGREDIENTS
  } from './actions'

  const initialState = {
    days:[],
    dayRecipes:[],
    ingredients:[]
  };
  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case GET_DAYS:
        return {
          ...state,
          days: action.payload
      }
      case GET_DAY_RECIPES:
        return {
          ...state,
          dayRecipes: action.payload
      }
      case GET_INGREDIENTS:
        return {
          ...state,
          ingredients: action.payload
      }


  default: return state
  };
  };

  export default rootReducer;

