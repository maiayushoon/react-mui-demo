import React from 'react'
import { Typography } from '@mui/material'
export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>



        <Typography variant='subtitle1'>Sub Title 1</Typography>
        <Typography variant='subtitle2'>Sub Title 2</Typography>


        <Typography variant='body1'>Body 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aliquam, maxime, quisquam, rem dolores minus dolor repudiandae aliquid consequuntur id qui doloremque magni? Dignissimos similique minus nesciunt nobis! Deserunt, ullam.</Typography>
        <Typography variant='body2'>Body 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam impedit quod odit, corporis nulla voluptatibus pariatur hic odio fugiat dolores quibusdam repellat consequuntur, adipisci sit dicta fugit nisi repellendus.</Typography>
    </div>
  )
}
