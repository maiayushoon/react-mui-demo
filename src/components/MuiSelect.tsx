import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from "react"


export const MuiSelect = () => {
    // const [country, setcountry] = useState('')
    const [countries, setcountries] = useState<string[]>([])
    console.log(typeof (countries), countries)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setcountries(typeof value === 'string' ? value.split(',') : value)

    }

    return (
        <Box width={'250px'} >MuiSelect
            <TextField label='select-country'
                select                                    //is used to convert the textfield input into select drop down
                value={countries}
                onChange={handleChange}
                fullWidth
                SelectProps={{                           //after this we can select the multiple options
                    multiple: true
                }}
                size="small"
                color="secondary"
                helperText='Plz slect your country'
                error
            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='USA'>United States</MenuItem>
                <MenuItem value='UK'>United Kingdom</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
        </Box>
    )
}
