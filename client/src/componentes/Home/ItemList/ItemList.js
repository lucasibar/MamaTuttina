import * as React from 'react';
import { useEffect, useState } from 'react'
import HandelAmounts from './HandelAmounts'


export default function ItemList({list}) {

  const [ingredientsList, setIngredientsList] = useState([])

  useEffect(()=>{
    setIngredientsList(list)
  },[list])


return (
  <>

      {ingredientsList.length>0 ? ingredientsList.map((ingredient, i)=>
        <HandelAmounts key={i} ingredient={ingredient}/>
      ):null}
    </>
  )
}



