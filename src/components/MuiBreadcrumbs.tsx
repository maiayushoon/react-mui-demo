import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export const MuiBreadcrumbs = () => {
  return (
    <Box margin={2}>
      <Breadcrumbs 
      aria-label="Breadcrumb" 
      separator={<NavigateNextIcon fontSize="small"/>} 
      maxItems={2}
      itemsAfterCollapse={2}
      itemsBeforeCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color={"text.primary"}>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
