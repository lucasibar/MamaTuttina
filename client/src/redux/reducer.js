import {
  GET_DAYS,
  GET_DIARY_DAY,
  GET_INGREDIENTS,
  DAY_AFTER,
  DAY_BEFORE
  } from './actions'

  const initialState = {   
    today:"2023-10-29",
    objetive: 0,
    dayMealsDiary:[],
    
    
    
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



      case DAY_BEFORE:
        function formatBeforeDateToCustomString(dateData) {
          let date = new Date(dateData)
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const day = (date.getDate()).toString().padStart(2, '0');
          const formattedDate = `${year}-${month}-${day}`;
          return formattedDate;
        }
        const formattedDateBefor = formatBeforeDateToCustomString(state.today);
        return {
          ...state,
          today: formattedDateBefor,
          objetive: 0,
          dayMealsDiary:[],
        }


      case DAY_AFTER:
        function formatAfterDateToCustomString(dateData) {
          let date = new Date(dateData)
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const day = (date.getDate()+2).toString().padStart(2, '0');
          const formattedDate = `${year}-${month}-${day}`;
          return formattedDate;
        }
        const formattedDateAfter = formatAfterDateToCustomString(state.today);
        return {
          ...state,
          today: formattedDateAfter,
          objetive: 0,
          dayMealsDiary:[],
        }



      case GET_DIARY_DAY:
        return {
          ...state,
          objetive: action.payload.kcalObjetive,
          today:action.payload.date,
          dayMealsDiary: action.payload.Meals
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

