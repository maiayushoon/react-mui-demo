import React from 'react'
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width={'300px'}>
        <Card>
            <CardMedia component='img'
           
            image='https://pixabay.com/get/g959aa19f15b4e7ec6a32152eee223fedebcccee77848bdb2d72a4e562d3d128ccd251951b1265df324b975c1eaac8e18343561883e732160de1c4c9e78f7ae2c_640.jpg'
            style={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component={'div'}>React</Typography>
                <Typography variant='body1' color='text.secondary' >React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.</Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn</Button>

            </CardActions>
        </Card>
    </Box>
  )
}
