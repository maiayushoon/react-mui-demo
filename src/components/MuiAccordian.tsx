import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MuiAccordian = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handleChange =(isExpanded: boolean, panel: string)=>
    {
        setExpanded(isExpanded? panel : false)
    }
  return (
    <>
      <Box  sx={{ width: '100%' }}>
            <Accordion expanded={expanded==='panel1'} sx={{ padding:'5px',
            margin:'10px'}}
      onChange={(event,isExpanded)=>handleChange(isExpanded,'panel1')}>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            possimus voluptatibus nam magni modi? Quos, quo explicabo!
            Molestiae?
          </Typography>
        </AccordionDetails>
      </Accordion >
      <Accordion expanded={expanded==='panel2'}
            onChange={(event,isExpanded)=>handleChange(isExpanded,'panel2')}>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            possimus voluptatibus nam magni modi? Quos, quo explicabo!
            Molestiae?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel3'}
            onChange={(event,isExpanded)=>handleChange(isExpanded,'panel3')}>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            possimus voluptatibus nam magni modi? Quos, quo explicabo!
            Molestiae?
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
    </>
  );
};
