import { 
  GET_DAYS
  } from './actions'
  const initialState = {
    days: [],
  };
  
  const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case GET_DAYS:
        return {
          ...state,
          days: action.payload       
      }
  default: return state
  };
  };
  
  export default rootReducer;
  
  