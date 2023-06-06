import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


function Objectives(props) {
    const objective  = useSelector(state=> state.objective)
    const [objectives, setObjective]= useState(0)

    useEffect(()=>{
        setObjective(objective)
      },[objective])
   return (
    <div className='objetives'>
    <div className='objetivesAnalisis' >
    <p>{objectives} kcal</p>
    <hr/>
    <p>Consumido</p>
    <hr/>
    <p>Restante</p>
    </div>
  </div>
   )
}

export default Objectives;