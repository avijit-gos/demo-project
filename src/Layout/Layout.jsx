/** @format */

import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Header from "../Component/Header/Header";
import Navbar from "../Component/Navbar/Navbar";
import { GlobalState } from "../Context/Context";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Layout = ({ children }) => {
  const { pageType } = GlobalState();
  const history = useHistory();

  const goBackEvent = () => {
    history.goBack();
  }
  return (
    <Box className='layout_container'>
      {pageType === "main" ? (
        <>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar />
        </>
      ) : (
          <Button className="back_button" onClick={goBackEvent}>
            <BiArrowBack />
        </Button>
      )}

      {/* Body */}
      {children}
    </Box>
  );
};

export default Layout;
