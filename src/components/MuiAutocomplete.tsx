import React from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

//The autocomplete is a normal text input enhanced by a panel of suggested options
type Skill = {
  id: number;
  label: string;
};
const skills = [
  "HTML",
  "CSS",
  "JAVA",
  "C",
  "CPP",
  "REACT",
  "MUI",
  "JAVASCRIPT",
];
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  console.log(skill);
  
  const handleChange = (event: any, newValue: string | null) => {
    setValue(newValue);
  };                          
  console.log(value);
  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={handleChange}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null)=> setSkill(newValue)}
      />
    </Stack>       
  );
};
