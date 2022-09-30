import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  const postData = [
    {
      id: 1,
      username: "Santosh Phaiju",
      image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content: "It's never too late for something ❤️‍🔥😍"
    },
    {
      id: 2,
      username: "Santosh",
      image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content: "What a place here ❤️‍🔥🥰"
    },
    {
      id: 3,
      username: "Don Dada",
      image: "https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      content: "Impressive look out here ❤️‍🔥😘😍😎😍"
    },
  ]
  return <Box flex={4} p={2}>
    {postData.map((data) =>{
      return <Post key={data.id} data={data} />
    })}
  </Box>;
};

export default Feed;
