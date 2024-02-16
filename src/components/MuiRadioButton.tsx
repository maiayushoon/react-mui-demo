import { Box, FormLabel, FormControlLabel, RadioGroup, Radio, FormControl } from '@mui/material'
import { useState } from "react";
export const MuiRadioButton = () => {

    const [value, setvalue] = useState('')
    console.log(`Selected value is ${value}`);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{                      //{ target: { value: any; }; } 
        setvalue(event.target.value) 
        
    }
    return (

           <Box>
             <FormControl 
             error 
             required>
                <FormLabel id='job-experience-job-label'>
                    Years of Experience
                </FormLabel>
                <RadioGroup 
                name='job-experience-job' 
                aria-labelledby='job-experince-group-label' 
                value={value} 
                onChange={handleChange}
                row>
                    <FormControlLabel control={<Radio  size='small' color='primary'/>} label={'0-2'} value={'0-2'}/>
                    <FormControlLabel control={<Radio  size='small' color='error'/>} label={'3-5'} value={'3-5'}/>
                    <FormControlLabel control={<Radio  size='medium'/>} label={'6-10'} value={'6-10'}/>
                </RadioGroup>
            </FormControl>
           </Box>

    )
}

