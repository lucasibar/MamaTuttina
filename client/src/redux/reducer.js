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
        const lastDay = action.payload.filter(day => day.day === 'Tuesday')
        return {
          ...state,
          fullWeek: action.payload,
          actualDay: lastDay[0]
      }
  default: return state
  };
  };

  export default rootReducer;

