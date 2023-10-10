import React from 'react';
import './Objetives.css'
// import { useSelector } from 'react-redux';
// import kcalXingredient from '../../../utils/kcalXingredient'

export default function Objetives() {
//   const ingredients = useSelector(state=> state.ingredients)

//   // kcalXingredient(ingredientsList, ingredients)

// let Kcal = 0;

// ingredientsList.forEach(({ nameIngredient, amount }) => {
//   const alimento = ingredients.find((ingrediente) => ingrediente.nameIngredient === nameIngredient);
//   if (alimento) {
//     const calorias = (alimento.Kcal * amount) / 100;
//     Kcal = Kcal + calorias
//   }
// });

  return (
    <div className='macrosCircles'>
        <div className='kcalCircle'> 
        <h3 className='subtitle'>{"Kcal"}</h3>
        <h6 className='subtitle'>kilo calorias</h6>
        </div>
        <div className='protCircle'> 
        <h3 className='subtitle'>20%</h3>
        <h6 className='subtitle'>kilo calorias</h6>
        </div>
        <div className='carbCircle'> 
        <h3 className='subtitle'>50%</h3>
        <h6 className='subtitle'>kilo calorias</h6>
        </div>
        <div className='fatCircle'> 
        <h3 className='subtitle'>%30</h3>
        <h6 className='subtitle'>kilo calorias</h6>
        </div>
    </div>

  );
}