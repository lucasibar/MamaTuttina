import React from 'react';
import './HandleMealRecipe.css';

export default function HandleMealRecipe({ mealId, recipe }) {
  // const categories = ['None', 'Legumbre', 'Carne', 'Pollo', 'Pasta', 'Pescado', 'Arroz', 'Lacteo', 'Fruta', 'Panificado', 'Permitidos', 'Verdura'];

  // Clases de estilo basadas en la categoría de la receta
  const getCategoryStyle = (category) => {
    switch (category) {
      case 'Legumbre':
        return 'legumbreButton';
      case 'Verdura':
        return 'verduraButton';
      case 'Carne':
        return 'carneButton';
      case 'Pollo':
        return 'polloButton';
      case 'Pasta':
        return 'pastaButton';
      case 'Pescado':
        return 'pescadoButton';
      case 'Arroz':
        return 'arrozButton';
      case 'Lacteo':
        return 'lacteoButton';
      case 'Fruta':
        return 'frutaButton';
      case 'Panificado':
        return 'panificadoButton';
      case 'Permitidos':
        return 'permitidosButton';
      default:
        return 'defaultButton';
    }
  };

  return (
    <div className="botonRecipePlanification">
      {recipe.length > 0 ? (
        <div className={`buttonContainer`}>
          <button className={`button ${getCategoryStyle(recipe[0]?.category)}`}>
            {recipe[0]?.name} - {recipe[0]?.category}
          </button>
        </div>
      ) : (
        <div className="buttonContainer">
          <button className="button  defaultButton">
            Completar
          </button>
        </div>
      )}
    </div>
  );
}