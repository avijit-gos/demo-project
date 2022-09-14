/** @format */

import React from "react";
import { Box } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import { GlobalState } from "../../Context/Context";
import "./Main.css";
import PostCard from "../../Component/PostCard/PostCard";

const Main = () => {
  const { setPageType, setSortType, posts, setPosts, sortType } = GlobalState();

  React.useLayoutEffect(() => {
    setPageType("main");
  });

  React.useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      // url: "http://localhost:5000/api/post",
      url: "https://demo-work-123.herokuapp.com/api/post",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        if (sortType === "trending") {
          setPosts(
            response.data.posts.sort((a, b) => b.popularity - a.popularity)
          );
        } else if (sortType === "popular") {
          setPosts(
            response.data.posts.sort((a, b) => b.popularity - a.popularity)
          );
        } else {
          setPosts(response.data.posts);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [sortType, setSortType]);

  return (
    <Layout>
      <Box className='main_container'>
        {(posts || []).length > 0 && (
          <Box className='post_card_container'>
            {posts.map((post) => (
              <PostCard key={post._id} postData={post} />
            ))}
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Main;
