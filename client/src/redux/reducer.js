  import {
    GET_PLANIFICATION,
    GET_DIARY_DAY,
    GET_INGREDIENTS,
    DAY_AFTER,
    DAY_BEFORE,
    CHANGE_PORTION,
    CHANGE_MEAL,
    CHANGE_RECIPE_NAME,
    CHANGE_RECIPE_CATEGORY
    } from './actions'

    const initialState = {   
      today:"2023-11-22",
      objetive: 0,

      dayMealsDiary:[],
      planificationDays:[],


      ingredients:[]
    };




    const rootReducer = (state = initialState, action) => {
      switch(action.type) {
case CHANGE_PORTION:
          let { mealId, recipeId, portion}= action.payload
          const dayChange = state.dayMealsDiary
          const dayINDEXToChange= dayChange.findIndex( meal => meal.id === mealId )
          const recipeINDEXToChange  = dayChange[dayINDEXToChange].Recipes.findIndex(recipe=> recipe.id===recipeId)

          dayChange[dayINDEXToChange].Recipes[recipeINDEXToChange].portion = portion
          
          return {
              ...state,
              dayMealsDiary: dayChange
}
case CHANGE_RECIPE_CATEGORY:
          try{
         const changeRecipeNameDay = state.dayMealsDiary
         const justChangedRecipeName = changeRecipeNameDay.map(meal=>{
          if(meal.id === action.payload.id) return action.payload
          return meal
         })
          
          return {
                ...state,
                dayMealsDiary: justChangedRecipeName
              }
        }
        catch(error){
          return state
}
case CHANGE_RECIPE_NAME:
          try{
         const changeRecipeNameDay = state.dayMealsDiary
         const justChangedRecipeName = changeRecipeNameDay.map(meal=>{
          if(meal.id === action.payload.id) return action.payload
          return meal
         })
          
          return {
                ...state,
                dayMealsDiary: justChangedRecipeName
              }
        }
        catch(error){
          return state
}
case CHANGE_MEAL:
          try{
         const changeRecipeNameDay = state.dayMealsDiary
         const justChangedRecipeName = changeRecipeNameDay.map(meal=>{
          if(meal.id === action.payload[0].id) return action[0].payload
          if(meal.id === action.payload[1].id) return action[2].payload
          return meal
         })
          
          return {
                ...state,
                dayMealsDiary: justChangedRecipeName
              }
        }
        catch(error){
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


        // case CHANGE_MEAL:
        //   try{
        //   const {recipeId, mealId, chosenMeal} = action.payload
        //   const actualDay = state.dayMealsDiary
        //   let indexMealToChange = actualDay.findIndex(meal=> meal.id === mealId)
        //   let indexRecipeToChange = actualDay[indexMealToChange].Recipes.findIndex(recipe => recipe.id === recipeId)

        //   let recipeToPush = state.dayMealsDiary[indexMealToChange].Recipes
          
        //   const answer = actualDay.map( meal=>{
        //     if(meal.id === mealId){
              
        //       const deletedRecipe = meal.Recipes.filter(recipe=> recipe.id !==recipeId)
        //       meal.Recipes = deletedRecipe 
        //     }
        //     if(meal.id === chosenMeal){
        //       meal.Recipes.push(...recipeToPush)
        //     }
        //     return meal
        //   })
          
        //   // console.log(answer)
            
          
        //   return {
        //         ...state,
        //         dayMealsDiary: answer
        //       }
        // }
        // catch(error){
        //   return state
        // }