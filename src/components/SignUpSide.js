import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const axios = require('axios');



const theme = createTheme();

class SignUp extends React.Component{
    constructor(props) {
      super(props);    
      this.state = {
        value: null,pwd:"",helperPwdErrorText:"",pwdError:false,
        helperErrorText:"",emailError:false,email:""

      };    
    }
   handleSubmit = (event) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   firstName : data.get('firstName'),
    //   lastName : data.get('lastName'),
    //   Phonenumber : data.get('Phonenumber'),
    //   email: data.get('email'),
    //   password: data.get('password')
    // });

        var _obj = {};
        // _obj.firstName=data.get('firstName');
        // _obj.lastName=data.get('lastName');
        // _obj.phoneNumber=data.get('Phonenumber');
        // _obj.email=data.get('email');
        // _obj.password=data.get('password')    

         console.log("<>"+JSON.stringify(_obj));
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:4000/add_user',
    //   headers: {"Access-Control-Allow-Origin" : "*"},
    //   data: {
    //       "email": "456",
    //       "password": "8888888888"
    //     }
    // });
           fetch('http://localhost:4000/adduser',
            {method:'POST',mode:'cors',header: {"access-control-allow-origin" : "*"},
            body: JSON.stringify({ "username": 'example' })
          })
            .then(data => {
              console.log('Success:', data);
          })
            .catch((error) => {
              console.error('Error:', error);
          });
          
  };

  render() {
  return (
    <ThemeProvider theme={theme}>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Phonenumber"
                  label="Phone Number"
                  name="Phonenumber"
                  autoComplete="Phonenumber"
                />
                </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
}
export default SignUp