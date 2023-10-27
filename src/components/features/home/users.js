import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

const Users = ({user}) => {
  return (
    <>
        <Grid item key={user.id} xl={3} lg={3} md={4} sm={6} xs={12}>
                  <Box sx={{
                    width: 'auto',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '20px 0px',
                    // border:'1px solid black',
                    backgroundColor: '#fff'
                    ,
                    padding: '30px 10px',
                    boxShadow: '1px 1px 10px rgba(0,0,0,2)',
                    borderRadius: '12px',

                    '& img': {
                      width: '100px',
                      height: '100px',
                      borderRadius: '100%',
                      boxShadow: '1px 3px 10px rgba(0,0,0,2)',


                    },

                    '& h5': {
                      marginTop: '10px',
                      fontWeight: 600
                    },

                    '& button': {
                      margin: '10px'
                    }
                  }}>
                    <Box component="img" src={user.avatar_url} alt={user.login}></Box>
                    <Typography variant="h5" textTransform='capitalize'>{user.login}</Typography>

                    <Button variant="contained">Profile</Button>
                  </Box>
                </Grid>
    </>
  );
}

export default Users;

