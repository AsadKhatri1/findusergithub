import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import style from './style'
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={style.flexBetween}>
            <Link
              to="/"
            >
              <Box sx={style.flexCenter}>
              < PersonOutlineIcon sx={style.icon} /> <span style={{ color: 'white', fontSize: '24px' }}> Github Finder</span>
              </Box>
          
            </Link>

            <Box component="ul" sx={style.flexStart}>
              <Box component='li' >
                <Link to="/about" >
                  <Typography variant="h6" component="div" sx={style.linkColor}>
                    About
                  </Typography>
                </Link>
              </Box>
              <Box component='li' sx={{
                listStyle: 'none',

              }}>
                <Link to="/contact">
                  <Typography variant="h6" component="div" sx={style.linkColor}>
                    Contact
                  </Typography>
                </Link>
              </Box>
              <Box component='li' sx={{
                listStyle: 'none',

              }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Gallery
                </Typography>
              </Box>
            </Box>

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
