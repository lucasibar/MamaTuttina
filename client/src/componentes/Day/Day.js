import React, { useEffect, useState } from 'react'
import './Day.css'
import MealHandler from './MealHandler'
import { useSelector } from 'react-redux';

function Day(props) {
  // Para controlar el id de la meal que queremos cambiar?
  // const idMeal =  props.match.params.idMeal
  // console.log(idMeal,'ACA EN LA LINEA 11 DAY.JS')


  const actualDay = useSelector(state=> state.actualDay)
  const objective  = useSelector(state=> state.objective)
  
  
  const [objectives, setObjective]= useState(0)
  const [lunch, setLunch]= useState({})
  const [dinner, setDinner]= useState({})
  const [extra, setExtra]= useState({})

  // const [kCalTotal, setKCalTotal] =useState(0)

  useEffect(()=>{
    setObjective(objective)
    if(actualDay){
      setLunch(actualDay.Lunch)
      setDinner(actualDay.Dinner)
      setExtra(actualDay.Extra)
    }
  },[actualDay, objective])

  return (
    <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}>
      <div className='dayChange'>
        <button className='dayBeforeBotton'>{'<'}</button>
        <p className='titleDay'>{actualDay?.day}</p>
        <button className='dayAfterBotton'>{'>'}</button>
      </div>

      <div className='objetives'>
        <div className='objetivesAnalisis' >
        <p>{objectives} kcal</p>
        <hr/>
        <p>Consumido</p>
        <hr/>
        <p>Restante</p>

        </div>
      </div>

      <MealHandler mealName='Almuerzo' meal={lunch} />
      <MealHandler mealName='Cena' meal={dinner} />
      <MealHandler mealName='Extra' meal={extra}/>
      
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

    </div>
  )
}

export default Day;


