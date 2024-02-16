import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
export const MuiTextField = () => {
    const [Value, setValue] = useState('')
    return (

        <Stack spacing={4}>
            <Stack spacing={2} direction={"row"}>
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <TextField label='Small Secondary' size="small" color='secondary' variant='outlined' />
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <TextField label='Form Input' required size="small" color='secondary' variant='outlined' />
            </Stack>
            <form>
                <Stack spacing={2} direction={"row"}>
                    <TextField label='helper text' helperText='Do Not share your password to ANYONE' />
                    <TextField label='Password1' type="password" />
                    <TextField label='Password2' type="password" disabled helperText='Disabled prop' />
                    <TextField label='Read Only' InputProps={{ readOnly: true }} />
                    <TextField label='Read Only' InputProps={{ readOnly: true }} value='I am read only' />
                </Stack>
            </form>
            <Stack spacing={1} direction={"row"}>
                <TextField label='Amount' InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} ></TextField>
                <TextField label='Weight' InputProps={{ endAdornment: <InputAdornment position="end" >Kg</InputAdornment> }} ></TextField>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <TextField label='Password1' type="password" InputProps={{
                    endAdornment: <InputAdornment position="end"><IconButton edge="end">
                        {<VisibilityIcon />}
                    </IconButton></InputAdornment>
                }} />
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <TextField label='Form Input' required size="small" color='secondary' variant='outlined' value={Value} onChange={e => setValue(e.target.value)} error={!Value} helperText={!Value ? 'Required' : 'Do not share your password with anyone'} />
            </Stack>
        </Stack>
    )
}

