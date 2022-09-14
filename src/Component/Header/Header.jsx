/** @format */

import React from "react";
import { Box, Text } from "@chakra-ui/react";
import "./Header.css";

const Header = () => {
  return (
    <Box className='header_container'>
      <Text className='header_title'>Live Spaces</Text>
      <span className='sub_title'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </span>
    </Box>
  );
};

export default Header;
