import { Box, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const Searchbar = ({getData}) => {
    const [searchUser, setSearchuser]=useState('')

    const onChangehandler=(e)=>{
        setSearchuser(e.target.value)

    }
    const submitHandler=(e)=>{
        e.preventDefault()
        
        getData(searchUser)
    }
    // const clearHandler=()=>{
    //     setSearchuser('a')
    //     getData(searchUser)
    // }
  return (
    <div>
    <Container sx={{margin:'20px 0px' , display:'flex' , alignItems:'center' , justifyContent:'center'}}>
        <Box component="form" onSubmit={submitHandler}>
    <TextField onChange={onChangehandler} id="filled-basic" label="Search user" variant="filled" value={searchUser} sx={{margin:'0px 10px'}}/>
    <Button type='submit' variant="contained" sx={{margin:'0px 10px'}} >Search</Button>
    {/* <Button onClick={clearHandler} variant="outlined" color="error" sx={{margin:'0px 10px'}}>Clear</Button> */}
    </Box>
    </Container>
    </div>
  );
}

export default Searchbar;
