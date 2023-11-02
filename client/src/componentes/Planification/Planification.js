import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getPlanification} from '../../redux/actions'
import './Planification.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import HandleMealRecipe from './HandleMealRecipe/HandleMealRecipe'


export default function Planification() {
  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getPlanification())
  },[dispatch])

  const planificationDays = useSelector(state=> state.planificationDays)

  return (
    <div>
      <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%',   overflow: 'auto'}}>
      <Button variant="contained" fullWidth sx={{ position: 'fixed', bottom: 0 }}>Seleccionar dias/compra</Button>
      </div>
      {planificationDays?.map((day, i)=>

        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {day.dayName}
          </Typography>
          </AccordionSummary>

          <AccordionDetails>

          {day.Meals.map((meal, i)=>
            <HandleMealRecipe key={i} mealId={day.id} recipe={meal.Recipes}/>
          )}


          </AccordionDetails>
        </Accordion>
      )}
      

    </div>
  );
}