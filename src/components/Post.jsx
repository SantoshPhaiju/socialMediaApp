import React from 'react'
import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";


const Post = (props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const {username, image, content} = props.data;
  return (
    <div>
      <Card sx={{margin: 5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={username}
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
        <Checkbox
        {...label}
        icon={<BookmarkBorder />}
        checkedIcon={<Bookmark />}
      />
          
        </CardActions>
        
      </Card>
    </div>
  )
}

export default Post
