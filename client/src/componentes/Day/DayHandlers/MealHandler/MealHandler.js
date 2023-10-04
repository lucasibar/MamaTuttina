import IngredientsList from './IngredientsList/IngredientsList'
import RecipesList from './RecipesList/RecipesList'
import InputFoodHandler from './InputFoodHandler/InputFoodHandler'
import './MealHandler.css'
import * as React from 'react';
import{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';


function MealHandler({dayId, mealName, mealRecipes, mealIngredients, recipes, ingredients, ingredientsGrms}) {
  const [meal, setMeal] = useState('')
  
  const ingredientsCaracteristis = useSelector(state=> state.ingredients)
  let Kcal = 0;
 
  ingredientsGrms.forEach(({ nameIngredient, amount }) => {
    const alimento = ingredientsCaracteristis.find((ingrediente) => ingrediente.nameIngredient === nameIngredient);
    if (alimento) {
      const calorias = (alimento.Kcal * amount) / 100;
      Kcal = Kcal + calorias
    }
  });
  
  useEffect(()=>{
    if(mealName==='Almuerzo')setMeal('lunch')
    if(mealName==='Cena')setMeal('dinner')
    if(mealName==='Extra')setMeal('extra')
  },[mealName])
  
return (
  <>

      <div className='ingredient'>
      <h4>{mealName}</h4>
      <h4> {Math.round(Kcal)} kcal</h4>
      </div>

      <RecipesList recipes={recipes? recipes:[]}/>
      <IngredientsList ingredients={ingredients?ingredients:[]}/>
      <div className='handlers'>
        <InputFoodHandler recipes={recipes} ingredients={ingredients} dayId={dayId} meal={meal} mealRecipes={mealRecipes} mealIngredients={mealIngredients}/>
      </div>
    </>
  )
}

export default MealHandler;