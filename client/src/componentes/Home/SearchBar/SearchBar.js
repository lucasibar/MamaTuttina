import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import {getIngredients} from '../../../redux/actions'
import { useHistory } from 'react-router-dom';


import HandelAmounts from './HandelAmounts'


export default function SearchBar({options, handelSelection}) {

  const [inputValue, setInputValue] = React.useState('');


  const addAmounts = (foodName) => {
return <HandelAmounts/>
  }


  return (
    <div style={{ marginTop: '90px' }}>
    <Autocomplete
      value={inputValue}
      onChange={(event, newValue) => {
        addAmounts(newValue)
      }}

      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="controllable-states-demo"
      options={options}
      sx={{ width: 360 }}
      renderInput={(params) => <TextField {...params} label="Agregar alimento" />}
    />
  </div>

  );
}
