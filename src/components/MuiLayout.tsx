import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export default function MuiLayout() {
  return (
    //The Paper component is a container for displaying content on an elevated surface.
    <Paper sx={{padding: '32px'}} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row-reverse"
        spacing={5}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "250px",
            width: "250px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Mui & React
        </Box>
        <Box
          display={"flex"}
          height={"250px"}
          width={"250px"}
          p={2}
          sx={{
            backgroundColor: "secondary.light",
          }}
        >
          dfgdsgsfdg
        </Box>
      </Stack>
      {/* <Grid container my={3} spacing={2}> */}
      <Grid container my={3} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>Item 1</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>Item 2</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>Item 3</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>Item 4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
