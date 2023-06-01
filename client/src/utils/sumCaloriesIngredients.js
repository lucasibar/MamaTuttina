export default function sumCaloriesRecipe(recipe){
    let totalKcal = 0
    if( recipe.Ingredients.length>0){
        totalKcal = recipe.Ingredients.map(ingredient=>{
            const caloriesPerGramIngrerdient = ingredient.kcla100gr/100 || 0
            const gramsIngredient = ingredient.RecipesIngredients.amount || 0
            return caloriesPerGramIngrerdient * gramsIngredient
        }).reduce((acc, cal)=> acc+cal , 0)
    }else totalKcal = 0  
    
    return totalKcal
} 




    // if(meal){
    //   const recipes = meal.Recipes
    //   const ingredients = meal.Ingredients
    //   recipes && setRecipes([...recipes.Ingredients])
    //   ingredients?.length>0 && setIngredients(...ingredients)
      
    //   calculo todas las calorias que tiene la parte de recetas de esta comida
    //   const kCalRecipes = recipes?.map((recipe, index)=>{
    //     const kCalRecipe = recipe.Ingredients.reduce((acc, ingredient)=> {
    //       let kcalGramIngredient = ingredient.kcla100gr / 100 
    //       let gramsIngredient = ingredient.RecipeIngredients.amount
    //       let kcalIngredientPerRecipe = kcalGramIngredient * gramsIngredient
    //       return acc+kcalIngredientPerRecipe
    //     },0)
    //     return kCalRecipe
    //   }).reduce((acc, kCalRecipe)=>acc+kCalRecipe,0)
    
    //   calculo todas las calorias que tiene la parte de ingredientes relacionados directamente con esta comida
    //   const kCalIngredients = ingredients?.reduce((acc, ingredient)=> {
    //     let kcalGramIngredient = ingredient.kcla100gr / 100 
    //     let gramsIngredient = 0
    //     if(mealName==='Almuerzo') gramsIngredient = ingredient.RecipeIngredients?.amount
    //     if(mealName==='Cena') gramsIngredient = ingredient.DinnerIngredients?.amount
    //     if(mealName==='Extra') gramsIngredient = ingredient.ExtraIngredients?.amount
    //     let kcalIngredientPerRecipe = kcalGramIngredient * gramsIngredient ||0
    //     return acc+kcalIngredientPerRecipe
    //   },0)
    //   setKCalTotal(kCalRecipes + kCalIngredients)
    // }else{
    //   setKCalTotal(0)
    // }