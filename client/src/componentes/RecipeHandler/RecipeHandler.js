import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import PortionHandler from './PortionHandler/PortionHandler'
import IngredientHandler from '../IngredientHandler/IngredientHandler'
import './RecipeHandler.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function RecipeHandler({recipe, title, mealId}) {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  return (
    <React.Fragment>

        <div className='meal' onClick={handleClickOpen}>
          <p >{recipe.name}</p>
          <p >porciones{recipe.portion}</p>
        </div>
          <Divider variant="middle" />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'fixed' }}>
          <Toolbar>
            <Typography sx={{ ml: 1, flex: 40 }} variant="h6">
              {title}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ flex:5, justifyItems:'right' }}
            >
              <CloseIcon />
            </IconButton>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>

        
        
        
        
        <PortionHandler portionBDD={recipe.portion} mealId={mealId} recipeId={recipe.id}/>

        <div className='meal' >
          <p >Comida</p>
          <p style={{ color: "blue" }} onClick={handleClickOpen} >{"Almuerzo"}</p>
        </div>
        <div className='meal'>
          <p >Categoria</p>
          <p style={{ color: "blue" }} onClick={handleClickOpen} >{recipe.category}</p>
        </div>
        <div className='meal'>
          <p >Nombre</p>
          <p style={{ color: "blue" }} onClick={handleClickOpen} >{recipe.name}</p>
        </div>

        
        <Divider variant="middle" style={{ marginTop: "100px" }}/>
        <div className='mealtitle'>
          <h4 >Ingredientes </h4>
          <h4>  1 porcion</h4>
        </div>
          {recipe.Ingredients.map((ingredient, i)=>
            <IngredientHandler key={i} ingredient={ingredient}/>
          )}
      </Dialog>
    </React.Fragment>
  );
}