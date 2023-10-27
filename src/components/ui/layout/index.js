import React, { useState } from 'react';
import { Navbar } from '../../common';
import { Box, Container } from '@mui/material';


const Layout = (props) => {


  return (
    <>
      <Navbar/>
      
      <Box component="main" >
 
        <Container maxWidth="lg">{props.children}</Container>
      </Box>
    </>
  );
}

export default Layout;
