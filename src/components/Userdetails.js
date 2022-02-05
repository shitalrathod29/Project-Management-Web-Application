import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@mui/material/CssBaseline';
import './Userdetails.css';
import AppBar from "./AppBarAdmin";

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('User Name 1', 'xyx@gmail.com', 6),
  createData('User Name 2', 'abc@gmail.com', 9),
  createData('User Name 3', 'efe@gmail.com', 16),
  createData('User Name 4', 'xyx@gmail.com', 3 ),
  createData('User Name 5', 'xyx@gmail.com', 16),
];

export default function UserTable() {
  return (
    
              
    <React.Fragment>
        <AppBar/>
        <div id ="centerDiv">  
      <CssBaseline />
      <Container fixed>
      <Grid container spacing={2}>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email Id</TableCell>
            <TableCell align="right">Number of Projects</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Container>
    </div>
    </React.Fragment>
    
  );
}
