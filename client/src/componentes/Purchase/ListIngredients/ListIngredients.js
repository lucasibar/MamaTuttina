import React from 'react';
import IngredientItem from './IngredientItem/IngredientItem'



export default function ListIngredients({listID, ingredients}) {  

  return (
    <div>
        {ingredients? ingredients.map((ingredient, index)=>
          <IngredientItem 
          key={index}
          name={ingredient.name}
          ingredientAmount = {ingredients}
          listID= {listID}
          />
        ) : null
        }
    </div>
  );
}

// SACAR EL purchaseListIngredients DEL MEDIO POR FAVOOOOOOORRR   
 //[
      //   {
      //     id: "blabla",
      //     name: "Nombre de lista"
      //     ingredients: [{name: "pollo", amount: 250}, {name: "lechuga", amount: 100} ]
      //   },
      //   {
      //     id: "terotero",
      //     name: "Compras"
      //     ingredients:[{name: "cebolla", amount: 1}, {name: "tomate", amount: 2} ]
      //   }
      // ]