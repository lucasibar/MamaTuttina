import { 
  GET_DAYS
  } from './actions'
  const initialState = {
    fullWeek: [],
  };
  
  const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case GET_DAYS:
        return {
          ...state,
          fullWeek: action.payload       
      }
  default: return state
  };
  };
  
  export default rootReducer;
  
  