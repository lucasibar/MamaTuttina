import { 
  GET_DAYS
  } from './actions'
  const initialState = {
    fullWeek: [],
    actualDay:{},
    objective: 2000
  };
  
  const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case GET_DAYS:
        return {
          ...state,
          fullWeek: action.payload,
          actualDay: action.payload.shift()
      }
  default: return state
  };
  };
  
  export default rootReducer;
  
  