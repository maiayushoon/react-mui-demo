import { Box, FormControlLabel, Checkbox, FormControl, FormGroup, FormLabel, FormHelperText } from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import React, { useState } from "react";
export const MuiCheckBox = () => {

    const [acceptTnC, setacceptTnC] = useState(false)

    const [skills, setSkills] = useState<string[]>([])


    console.log(skills);

    const handleChangeSkill = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        }
        else setSkills(skills.filter((s) => s !== event.target.value))
    }


    // console.log(acceptTnC);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setacceptTnC(event.target.checked)
        // console.log(event.target.checked);
    }
    return (
        <>
            <Box>
                <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={acceptTnC} onChange={handleChange} />} />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={acceptTnC}
                    onChange={handleChange}
                />
            </Box>
            <Box>
                <FormControl error required>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row >
                        <FormControlLabel label='HTML' control={<Checkbox value={'html'} checked={skills.includes('html')} onChange={handleChangeSkill} />} />
                        <FormControlLabel label='CSS' control={<Checkbox value={'css'} checked={skills.includes('css')} onChange={handleChangeSkill} />} />
                        <FormControlLabel label='JavaScript' control={<Checkbox value={'javascript'} checked={skills.includes('javascript')} onChange={handleChangeSkill} />} />
                    </FormGroup>
                    <FormHelperText>Invalid Selection</FormHelperText>
                </FormControl>
            </Box>
        </>
    )
}
