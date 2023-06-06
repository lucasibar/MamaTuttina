import React from 'react'
import { useSelector } from 'react-redux';


function Exercise(props) {
 
   return (
    <div>
    <div className='meal'>
    <p >Ejercicio</p>
    <p >kcal quemadas</p>
    </div>
    <div className='handlers'>
    <button>Añadir ejercicio</button>
    <button>generar rutina</button>
    </div>
    </div>
   )
}

export default Exercise;