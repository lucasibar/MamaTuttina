import * as React from 'react';
import {useState, useEffect} from 'react'
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RecipeConteiner from './RecipeConteiner';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



export default function Week({day}) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const [caloriesDay, setSumCalories]=useState(0)
  const [caloriesLunch, setSumCaloriesLunch]=useState(0)
  const [caloriesDinner, setSumCaloriesDinner]=useState(0)
  const [caloriesExtra, setSumCaloriesExtra]=useState(0)

  useEffect(()=>{
      const kCalRecipe = caloriesLunch+caloriesDinner+caloriesExtra
        setSumCalories(kCalRecipe)
  },[caloriesLunch, caloriesDinner, caloriesExtra])

  const sumCalories = (meal, calories) =>{
    if(meal==='lunch')  setSumCaloriesLunch(calories)
    if(meal==='dinner') setSumCaloriesDinner(calories)
    if(meal==='extra') setSumCaloriesExtra(calories)
  }

  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={day.day} secondary={open? null: `${caloriesDay} calorias`}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <RecipeConteiner
              lunch={day.lunch} 
              dinner={day.dinner} 
              extra={day.extra}
              sumCalories={sumCalories}
            />

          </ListItemButton>
        </List>
      </Collapse>
      
    </div>
  );
}




