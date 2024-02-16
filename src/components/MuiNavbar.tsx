import React,{useState} from "react";
import { AppBar, Toolbar, IconButton,Typography, Stack, Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
export const MuiNavbar = () => {
  const [anchorE1, setAnchorE1] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorE1)
  const handleclick = (e: React.MouseEvent<HTMLElement>)=>{
    setAnchorE1(e.currentTarget)
  }
  const handleClose = ()=>{
    setAnchorE1(null)
  }
  return (

    <AppBar position="static" 
    sx={{color:"red",
    backgroundColor:'transparent'}}>
      <Toolbar>
        <IconButton  size='large' edge='start' color='error' aria-label='logo'>
          <CatchingPokemonIcon/>
        </IconButton>
        <Typography variant="h6" component={'div'} sx={{flexGrow:1}} >
            POKEMONAPP
        </Typography>
        <Stack direction='row' display={'flex'} spacing={2}>
          <Button color='inherit'>Pricing</Button>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Features</Button>
          <Button id="resources-button" 
          onClick={handleclick} 
          color='inherit' 
          aria-controls={open? 'resources-menu': undefined }
          aria-haspopup='true'
          aria-expanded={open? 'true' : undefined}
          endIcon={<KeyboardArrowDownIcon/>}
          >Resources</Button>
          <Button color='inherit'>Login</Button>
        </Stack>
        <Menu anchorEl={anchorE1} 
        open={open} 
        id="resources-menu"
        MenuListProps={{"aria-labelledby" : ' resouces-button', }}
        onClose={handleClose}
        anchorOrigin={{
          vertical:'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
