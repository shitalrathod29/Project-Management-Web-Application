import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { withStyles } from "@material-ui/core/styles";
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Img from './image/mainimage.jpg'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Venkateshkumar Rathod
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const useStyles = theme => ({

const theme = createTheme();

 class SignInSide extends React.Component{
  constructor(props) {
    super(props);    
    this.state = {
      value: null,pwd:"",helperPwdErrorText:"",pwdError:false,
      helperErrorText:"",emailError:false,email:""
    };    
  }

    handleEmailChange = (event) => {
      this.setState({email: event.target.value,helperText:"",emailError:false,})
    };

    handlePwdChange = (event) => {
      console.log("pwd ",event.target.value);
      this.setState({pwd: event.target.value,helperErrorText:"",pwdError:false,})
    };

    onSubmit = (event) => {
      event.preventDefault();
      let emailValue = this.state.email;
      let str = this.state.pwd;
      var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
      let _validEmail =  emailValue.match(emailfilter);
      var pwd = (str.match(/[a-z]/g) && str.match(/[A-Z]/g) && str.match(/[0-9]/g) && str.match(/[^a-zA-Z\d]/g) && str.length >= 8);
      console.log("pwd ",pwd);console.log("_validEmail ",_validEmail);

      if(!pwd){
        this.setState({helperPwdErrorText:"In-Valid Pwd Address",pwdError:true,})
      }
      
      if(_validEmail==null){
        this.setState({helperErrorText:"In-Valid Email Address",emailError:true,})
      }else{  
        this.setState({email: emailValue,helperText:"",emailError:false,})
      }
    };
  render() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Img})` ,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />            
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'info.main' }}>
              <HttpsOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                error ={this.state.emailError}
                helperText={this.state.helperErrorText}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={this.state.email}
                onChange = {this.handleEmailChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                error ={this.state.pwdError}
                helperText={this.state.helperPwdErrorText}
                name="password"
                label="Password"
                value={this.state.pwd}
                type="password"
                onChange = {this.handlePwdChange}
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                color="info"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={this.onSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>                 
                </Grid>
                <Grid item>
                {/* <Link href="/addprj" variant="body2">
                    {"Visit Add Project Page"}
                  </Link> */}
                  </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
 }
}
export default SignInSide
