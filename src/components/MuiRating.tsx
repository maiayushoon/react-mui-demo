import React from "react";
import { Rating, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(4);
  console.log(value);

  const handleChange = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  return (
    //the Stack component is used to manage the layout and spacing of its child components. It's particularly useful when you want to stack elements vertically or horizontally in a predictable and consistent manner.
    <Stack spacing={2}>
      MuiRating
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        highlightSelectedOnly
      />
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="medium"
      />
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="small"
      />
    </Stack>
  );
};
