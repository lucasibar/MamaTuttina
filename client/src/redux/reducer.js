import {
  GET_PLANIFICATION,
  GET_DIARY_DAY,
  GET_INGREDIENTS,
  DAY_AFTER,
  DAY_BEFORE,
  CHANGE_PORTION
  } from './actions'

  const initialState = {   
    today:"2023-11-09",
    objetive: 0,

    dayMealsDiary:[],
    planificationDays:[],


    ingredients:[]
  };




  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      
      
      case CHANGE_PORTION:
        let {mealId, recipeId, portion}= action.payload
        if(state.dayMealsDiary.find(item => item.id === mealId)){
          const dayChanged = state.dayMealsDiary.map(meal=> {
            if(meal.Recipes.find(meal => meal.id === mealId)){
              const recipesChanged = meal.Recipes.map(recipe=> {
                if(recipe.id=== recipeId){
                  recipe.portion= portion
                  return recipe
                }else{
                  return recipe
                }
            })
            return recipesChanged
            }
            return meal
          })
        
        
        return {
            ...state,
            dayMealsDiary: dayChanged
          }
      }else{

      return state
      
      
      
      
      
      
      }


 
      
      
      
      
      
      
      
      
      
      case GET_PLANIFICATION:
        return {
          ...state,
          planificationDays: action.payload
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

