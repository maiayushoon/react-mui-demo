import React from "react";
import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link href="#">Link</Link>
      <Link href="#" variant="body2">Link</Link>
      <Typography variant="h6">
      <Link href="#" color={'secondary'}>Secondary</Link></Typography>
    </Stack>
  );
};
