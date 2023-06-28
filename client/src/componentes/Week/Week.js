import * as React from 'react';
import { useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import HandleRecipe from './HandleRecipe/HandleRecipe'
import { useDispatch } from 'react-redux';
import {getWeek} from '../../redux/actions'
import './Week.css'


export default function Week() {
  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getWeek())
  },[dispatch])


  let week = [ 
    {day:'Lunes',
    dayId:1,
    lunchCategory:'Legumbre',
    dinnerCategory:'Carne',
    extraCategory:'Lacteo'  
    }, 
    {day:'Martes',
    dayId:2,
    lunchCategory:'Pasta',
    dinnerCategory:'Pescado',
    extraCategory:'Panificado'  
    }, 
    {day:'Miercoles',
    dayId:3,
    lunchCategory:'Carne',
    dinnerCategory:'Arroz',
    extraCategory:'Fruta'  
    }, 
    {day:'Jueves',
    dayId:4,
    lunchCategory:'Legumbre',
    dinnerCategory:'Pescado',
    extraCategory:'Lacteo'  
    }, 
    {day:'Viernes',
    dayId:5,
    lunchCategory:'Arroz',
    dinnerCategory:'Carne',
    extraCategory:'Permitidos'  
    }, 
    {day:'Sabado',
    dayId:6,
    lunchCategory:'Pescado',
    dinnerCategory:'Pollo',
    extraCategory:'Panificado'  
    }, 
    {day:'Domingo',
    dayId:7,
    lunchCategory:'Pasta',
    dinnerCategory:'Carne',
    extraCategory:'Permitidos'  
    }]

  return (
    <div>
      <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%',   overflow: 'auto'}}>
      <Button variant="contained" fullWidth sx={{ position: 'fixed', bottom: 0 }}>Generar lista de compras</Button>
      </div>
      {week.map((day)=>

        <Accordion key={day.dayId}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {day.day}
          </Typography>
          </AccordionSummary>

          <AccordionDetails>
          
          <HandleRecipe meal='Almuerzo'/>
          <HandleRecipe meal='Cena'/>
          <HandleRecipe meal='Exra'/>

          </AccordionDetails>
        </Accordion>
      )}
      

    </div>
  );
}