import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {dayBefore, dayAfter} from '../../../redux/actions'


function DayPagination({day}) {
   let dispatch = useDispatch() 
   const [dayName, setParameters] =useState("")

   useEffect(() => {
      const toCompare = new Date(day);
      toCompare.setHours(0, 0, 0, 0); // Establece la hora a las 00:00:00
    
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Establece la hora a las 00:00:00
    
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      yesterday.setHours(0, 0, 0, 0);
    
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
    
      if (toCompare.getTime() === today.getTime()) {
        setParameters("Hoy");
      } else if (toCompare.getTime() === yesterday.getTime()) {
        setParameters("Ayer");
      } else if (toCompare.getTime() === tomorrow.getTime()) {
        setParameters("Mañana");
      } else {
        // Otra fecha
        setParameters(toCompare.toLocaleDateString());
      }
    }, [day]);



   const handleBefore = (e)=>{
      dispatch(dayBefore())
   }
  const handleAfter = (e)=>{
      dispatch(dayAfter())
   }
   

   return (
      <div className='dayChange'>
        <button className='dayBeforeBotton' onClick={handleBefore}>{'<'}</button>
        <p className='titleDay' >{dayName}</p>
        <button className='dayAfterBotton' onClick={handleAfter}>{'>'}</button>
      </div>
   )
}

export default DayPagination;
