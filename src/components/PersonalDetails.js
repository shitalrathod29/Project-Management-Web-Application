import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import AppBar from "./AppBar";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const axios = require('axios');



const theme = createTheme();

export default function PersonalDetails() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      firstName : data.get('firstName'),
      lastName : data.get('lastName'),
      Phonenumber : data.get('Phonenumber'),
      email: data.get('email'),
      password: data.get('password')
    });

        var _obj = {};
        _obj.firstName=data.get('firstName');
        _obj.lastName=data.get('lastName');
        _obj.phoneNumber=data.get('Phonenumber');
        _obj.email=data.get('email');
        _obj.password=data.get('password')    

         console.log("<>"+JSON.stringify(_obj));

          // fetch('http://localhost:4000/add_user',
          //   {method: 'POST',header: {"access-control-allow-origin" : "*",'Content-Type': 'application/json',},
          //   body: JSON.stringify({ username: 'example' })
          // })
          //   .then(data => {
          //     console.log('Success:', data);
          // })
          //   .catch((error) => {
          //     console.error('Error:', error);
          // });

          fetch('http://localhost:4000/add_user', {
            method: 'POST',
            header: {
              "Access-Control-Allow-Origin" : "*",
            },
        //     body: JSON.stringify({
        //       "user": {
        //         "email": "456",
        //         "password": "8888888888"
        //       }
        // })
        body:_obj
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    axios({
      method: 'post',
      url: 'http://localhost:4000/add_user',
      headers: {
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json'
        "Access-Control-Allow-Origin" : "*"
    },
      data: {
          "email": "456",
          "password": "8888888888"
        }
    });
           
          
  };


  return (
    <ThemeProvider theme={theme}>
         <AppBar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
       
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'info.main' }}>
            <PersonOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Personal Details
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  
                  fullWidth
                  id="firstName"
                  label="First Name"
                  disabled
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField                  
                  fullWidth
                  id="lastName"
                  disabled
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
                <Grid item xs={12}>
                <TextField                  
                  fullWidth
                  id="Phonenumber"
                  label="Phone Number"
                  name="Phonenumber"
                  autoComplete="Phonenumber"
                />
                </Grid>
              <Grid item xs={12}>
                <TextField   
                  disabled               
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField                  
                  fullWidth
                  id="Occupation"
                  label="Occupation"
                  name="occpation"
                  autoComplete="occpation"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField                  
                  fullWidth
                  id="Country"
                  label="Country"
                  name="country"
                  autoComplete="Country"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField                  
                  fullWidth
                  id="Experience"
                  label="Experience"
                  name="experience"
                  autoComplete="Experience"
                />
              </Grid>
             
              <Grid item xs={12}>
              </Grid>
            </Grid>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button> */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link href="/signin" variant="body2">
                  Already have an account? Log in
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}