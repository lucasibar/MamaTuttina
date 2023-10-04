export default function kcalXingredient(ingredientsList, ingredients){
    let kCal = 0

    const kCal_prot_carb_fat={
        kCal,
        prot:0,
        carb:0,
        fat:0
    }
    return kCal_prot_carb_fat
}


// import { useSelector } from 'react-redux';
// import kcalXingredient from '../../../utils/kcalXingredient'

// export default function Objetives({ingredientsList}) {
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