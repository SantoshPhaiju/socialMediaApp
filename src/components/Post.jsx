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


const Post = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
          title="Santosh phaiju"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://www.brainyquote.com/photos_tr/en/r/ronhall/898977/ronhall1.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
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
