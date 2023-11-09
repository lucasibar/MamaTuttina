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
import IngredientHandler from '../IngredientHandler/IngredientHandler'
import './RecipeHandler.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});








export default function RecipeHandler({recipe}) {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};
// console.log(recipe)
  return (
    <React.Fragment>
        <button className='meal' onClick={handleClickOpen}>
          <Typography className="button-text" variant="subtitle1"> {recipe.name}</Typography>
          <Typography className="button-text" variant="subtitle1"> portions {recipe.portion}</Typography>
        </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'fixed' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ position: 'fixed' }}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
              {recipe.name}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>




        <List sx={{ mt: 15, flex: 1 }}>
        <button className='meal' >
          <Typography className="button-text" variant="subtitle1"> Porciones</Typography>
          <Typography variant="subtitle1">{recipe.portion}</Typography>
        </button>
        <button className='meal' >
          <Typography className="button-text" variant="subtitle1"> Comida</Typography>
          <Typography variant="subtitle1"> Almuerzo</Typography>
        </button>
        <button className='meal' >
          <Typography className="button-text" variant="subtitle1"> Categoria</Typography>
          <Typography variant="subtitle1"> {recipe.category}</Typography>
        </button>
        <div className='meal' >
            <button>
              <Typography variant="subtitle1"> {recipe.name}</Typography>
            </button>
            <button>
              <Typography variant="subtitle1"> portions {recipe.portion}</Typography>
            </button>
        </div>
        </List>
        
        
{/*         
        <List >
        {recipe.Ingredients.map((ingredient, i)=>
        <ListItem key={i} button  sx={{ position: 'relative'}}>
            <ListItemText primary={ingredient.name} secondary={`${ingredient.amount} ${ingredient.unit}`} />
        </ListItem>
        )}
        </List> */}

        <List >
          {recipe.Ingredients.map((ingredient, i)=>
              <div key={i}>
                <IngredientHandler ingredient={ingredient}/>
              </div>
          )}
        </List>
      </Dialog>
    </React.Fragment>
  );
}
  // {/* <div  className='meal'>
  //         <p >{recipe.name}</p>
  //         <p >{recipe.portion} portions</p>
  //       </div> */}