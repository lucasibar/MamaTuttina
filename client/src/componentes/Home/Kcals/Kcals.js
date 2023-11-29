import * as React from 'react';

import { useEffect, useState } from 'react'

export default function Kcals({list}) {
    const [kcalsTotal, setKcalsTotal] = useState(0);
    const [ingredients, setIngredients] = useState(0);
console.log(list)
    useEffect(() => {



        // setIngredients(totalSum)
    }, [list]);
  return (
<h1 style = {{position: 'fixed', left: '10px', bottom: '10px', color: 'black' }}>{kcalsTotal} kcals</h1>
  );
}