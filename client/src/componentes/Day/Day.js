import * as React from 'react';
import './Day.css'
import MealHandler from './MealHandler'
import { useSelector } from 'react-redux';

function Day(props) {
  const actualDay = useSelector(state=> state.actualDay)

  return (
    <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}>
      <div className='dayChange'>
        <button className='dayBeforeBotton'>{'<'}</button>
        <p className='titleDay'>{actualDay.day}</p>
        <button className='dayAfterBotton'>{'>'}</button>
      </div>

      <div className='objetives'>
        <p >Objetivos</p>
        <div className='objetivesAnalisis' >
        <p>Objetivo</p>
        <p>Restante</p>
        <p>Consumido</p>
        <p>Resultado</p>
        </div>
      </div>

      <MealHandler mealName='Almuerzo' meal={actualDay? actualDay.Lunch: null } />
      <MealHandler mealName='Cena' meal={actualDay? actualDay.Dinner: null } />
      <MealHandler mealName='Extra' meal={actualDay? actualDay.Extra: null } />

    </div>
  )
}

export default Day;


