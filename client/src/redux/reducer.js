import {
  GET_DAYS,
  GET_DAY_RECIPES
  } from './actions'

  const initialState = {
    days:[],
    dayRecipes:[]
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


  default: return state
  };
  };

  export default rootReducer;

