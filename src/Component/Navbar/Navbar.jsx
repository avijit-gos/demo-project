/** @format */

import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { GlobalState } from "../../Context/Context";
import "./Navbar.css";

const Navbar = () => {
  const { setSortType, sortType } = GlobalState();
  return (
    <Box className='button_container'>
      <Button
        className={sortType === "time" ? "btn active" : "btn"}
        onClick={() => setSortType("time")}>
        Latest
      </Button>
      <Button
        className={sortType === "trending" ? "btn active" : "btn"}
        onClick={() => setSortType("trending")}>
        Trending
      </Button>
      <Button
        className={sortType === "popular" ? "btn active" : "btn"}
        onClick={() => setSortType("popular")}>
        Popular
      </Button>
    </Box>
  );
};

export default Navbar;
