import { 
  GET_DAYS
  } from './actions'
  const initialState = {
    dias: ['Lunes', 'Martes', "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo" ],
  };
  
  const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case GET_DAYS:
        return {
          ...state,
          dias: action.payload       
      }
  default: return state
  };
  };
  
  export default rootReducer;
  
  