/** @format */

import React from "react";
import { Box, Button, Img } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { GlobalState } from "../../Context/Context";
import "./PostCard.css";

const PostCard = ({ postData }) => {
  const { setSinglePost } = GlobalState();

  const history = useHistory();
  const viewFullPage = (id, post) => {
    history.push(`/${id}`);
    setSinglePost(post);
  };

  return (
    <Box className='post_card'>
      <Img src={postData.image} className='image' />
      <Box className='overlay'>
        <span>{postData.title}</span>
        <br />
        <Button
          className='link'
          onClick={() => viewFullPage(postData._id, postData)}>
          Full view
        </Button>
      </Box>
    </Box>
  );
};

export default PostCard;
