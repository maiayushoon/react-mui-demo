import React from 'react'
import {Box , FormControlLabel, Switch} from '@mui/material'
import { useState } from 'react'

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
      console.log({checked});
      
        setChecked(e.target.checked)
    }
  return (
    <Box>
        <FormControlLabel label='dark-mode' control={<Switch checked={checked} onChange={handleChange}/>}/>

    </Box>
  )
}
