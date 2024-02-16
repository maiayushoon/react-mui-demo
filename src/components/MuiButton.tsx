import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";




export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null)
    const handleFormatChange =
        (
            _event: React.MouseEvent<HTMLElement>,
            updatedFormats: string | null
        ) => {
            setFormats(updatedFormats)
            console.log(formats)
        }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction={"row"}>

                <Button variant="text" href="https://www.x.com/maiayushhoon">Text</Button>
                <Button variant="contained" href="https://www.instagram.com/maiayushoon">Contained</Button>
                <Button variant="outlined" href="https://www.youtube.com/c/maiayushhoon">Outlined</Button>

            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" color="secondary" href="https://www.youtube.com/c/maiayushhoon">Secondary</Button>
                <Button variant="contained" color="warning" href="https://www.youtube.com/c/maiayushhoon">Warning</Button>
                <Button variant="contained" color="primary" href="https://www.youtube.com/c/maiayushhoon">Primary</Button>
                <Button variant="contained" color="error" href="https://www.youtube.com/c/maiayushhoon">Error</Button>
                <Button variant="contained" color="info" href="https://www.youtube.com/c/maiayushhoon">Info</Button>
                <Button variant="contained" color="success" href="https://www.youtube.com/c/maiayushhoon">Success</Button>
            </Stack>
            <Stack spacing={4} direction={"row-reverse"} display="flex">
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>
            <Stack spacing={4} direction={"row"}>
                <Button variant="contained" startIcon={<BabyChangingStationIcon />} disableRipple>Baby</Button>
            </Stack>
            <Stack spacing={4} direction={"row"}>
                <Button variant="contained" endIcon={<BabyChangingStationIcon />} disableElevation>Baby</Button>
            </Stack>
            <IconButton color="error" size='large' onClick={() => { alert("You clicked on the babychanging station icon") }}>
                <BabyChangingStationIcon />
            </IconButton>
            <Stack direction={"row"}>
                <ButtonGroup variant="contained">
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={"row"}>
                <ButtonGroup variant="outlined">
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={"row"}>
                <ButtonGroup variant="text" orientation="vertical">
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={"row"}>
                <ButtonGroup
                    variant="contained"
                    orientation="vertical"
                    color="secondary"
                    size="small"
                    aria-label="alignment button group">
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={"row"}>
                <ToggleButtonGroup aria-label="text formatting" value={"formats"} onChange={handleFormatChange}>
                    <ToggleButton value={"bold"} ><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value={"italic"}><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value={"underlined"}><FormatUnderlinedIcon /></ToggleButton>

                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}