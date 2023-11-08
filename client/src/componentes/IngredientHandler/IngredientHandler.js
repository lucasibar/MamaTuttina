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
import './IngredientHandler.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});








export default function IngredientHandler({ingredient}) {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};



  return (
    <React.Fragment>
        <button className='meal' onClick={handleClickOpen}>
          <ListItem button  sx={{ position: 'relative'}}>
            <ListItemText primary={ingredient.name} secondary={`${ingredient.amount} ${ingredient.unit}`} />
          </ListItem>
        </button>
          <Divider />
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
              {ingredient.name}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>




        <List sx={{ mt: 15, flex: 1 }}>
        <button className='meal' >
          <Typography className="button-text" variant="subtitle1"> Cantidad</Typography>
          <Typography variant="subtitle1">{ingredient.amount}</Typography>
        </button>
        <button className='meal' >
          <Typography className="button-text" variant="subtitle1"> Unidad</Typography>
          <Typography variant="subtitle1">{ingredient.unit}</Typography>
        </button>


        <button className='meal' >
          <Typography className="button-text" variant="subtitle1"> Kcal/100grs</Typography>
          <Typography variant="subtitle1"> {ingredient.kcal100gr}</Typography>
        </button>
        <button className='meal' >
          <Typography className="button-text" variant="subtitle1"> Carbohidratos</Typography>
          <Typography variant="subtitle1"> {ingredient.carbs||0}</Typography>
        </button>
        <button className='meal' >
          <Typography className="button-text" variant="subtitle1"> Proteinas</Typography>
          <Typography variant="subtitle1"> {ingredient.proteins||0}</Typography>
        </button>
        <button className='meal' >
          <Typography className="button-text" variant="subtitle1"> Grasas </Typography>
          <Typography variant="subtitle1"> {ingredient.fats||0}</Typography>
        </button>
        {/* <div className='meal' >
            <button>
              <Typography variant="subtitle1"> {"recipeName"}</Typography>
            </button>
            <button>
              <Typography variant="subtitle1"> portions {"portions"}</Typography>
            </button>
        </div> */}
        </List>

      </Dialog>
    </React.Fragment>
  );
}
  // {/* <div  className='meal'>
  //         <p >{recipe.name}</p>
  //         <p >{recipe.portion} portions</p>
  //       </div> */}