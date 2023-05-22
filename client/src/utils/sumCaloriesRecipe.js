export default function sumCaloriesRecipe(recipe){
    let totalKcal = 0
    if( recipe.Ingredients.length>0){
        totalKcal = recipe.Ingredients.map(ingredient=>{
            const caloriesPerGramIngrerdient = ingredient.kcla100gr/100 || 0
            const gramsIngredient = ingredient.RecipesIngredients.amount || 0
            return caloriesPerGramIngrerdient * gramsIngredient
        }).reduce((acc, cal)=> acc+cal , 0)
    }else totalKcal = 0
    
    console.log(totalKcal, 'UTILS VIENDO COMO ES LA CUENTA DE CADA RECETA')      
    
    return totalKcal
} 