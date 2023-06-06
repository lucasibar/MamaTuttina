import React from 'react'


function DayPagination({day}) {
   return (
      <div className='dayChange'>
        <button className='dayBeforeBotton'>{'<'}</button>
        <p className='titleDay'>{day}</p>
        <button className='dayAfterBotton'>{'>'}</button>
      </div>
   )
}

export default DayPagination;
