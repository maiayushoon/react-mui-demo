import React, {useState} from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
    <IconButton size='large' edge='start' onClick={()=>setIsDrawerOpen(true)} sx={{ color:'primary'}}>
        <MenuIcon/>
    </IconButton>
    <Drawer anchor={undefined}   //bottom , top, left,  right
    open={isDrawerOpen}
    onClose={()=>setIsDrawerOpen(false)}>

    <Box padding={2} width={'250'} textAlign='center' role='presentation'>
        <Typography variant='h6' component={'div'}>
            Side Panel
        </Typography>
    </Box>

    </Drawer>
    
    </>
  )
}
