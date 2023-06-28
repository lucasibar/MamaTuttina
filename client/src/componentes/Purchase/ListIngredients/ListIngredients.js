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



export default function Purchase() {
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getIngredients())
  },[dispatch])

  const ingredients = useSelector(state=> state.ingredients)

  return (
    <>

        {ingredients?.map(ingredient=>
            <ListItem
                key={ingredient.id}
                secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                    {/* <ControlPointIcon color='primary'/> */}
                        <div className='amountItem'>
                            {false ? <span>-</span> : <DeleteOutlineIcon fontSize="small" />}
                            <span>1</span>
                            <span>+</span>
                        </div>
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar><FolderIcon /></Avatar>
                </ListItemAvatar>

                <ListItemText primary={ingredient.name} />
            
            </ListItem>
        )}
    </>
  );
}
