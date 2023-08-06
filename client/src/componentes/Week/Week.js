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
import { useSelector } from 'react-redux';
import {getWeek} from '../../redux/actions'
import './Week.css'


export default function Week() {
  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getWeek())
  },[dispatch])

  const week = useSelector(state=> state.week)

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