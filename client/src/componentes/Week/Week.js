import * as React from 'react';
import { useSelector } from 'react-redux';
import './Week.css'
import RecipesHandlers from './RecipesHandlers/RecipesHandlers';
import Button from '@mui/material/Button';

export default function Week() {
  const fullWeek = useSelector(state=> state.fullWeek)
  return (
  <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%',   overflow: 'auto'}}>
    <Button variant="contained" fullWidth sx={{ position: 'fixed', bottom: 0 }}>Generar lista de compras</Button>

    {fullWeek?.map((day, i)=>{
      return(
        <div key={i}>
          <h4>{day.day}</h4>
          <RecipesHandlers/>
        </div>
        
      )
    })}    

  </div>
  );
}




