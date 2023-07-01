import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { getIngredients } from '../../../redux/actions';
import './ListIngredients.css'



export default function ListIngredients() {
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getIngredients())
  },[dispatch])

  const ingredients = useSelector(state=> state.ingredients)

  return (
    <div>
        {ingredients?.map((ingredient, index)=>
        <div key={index} className='ingredientItem'>
          <ListItemAvatar>
              <Avatar><FolderIcon /></Avatar>
          </ListItemAvatar>
          <ListItemText primary={ingredient.name} />
          {/* <ControlPointIcon color='primary'/> */}
          <div className='amountItem'>
              {true ? <button>-</button> : <DeleteOutlineIcon fontSize="small" />}
              <button>1</button>
              <button>+</button>
          </div>
        </div>
        )}
    </div>

  );
}
