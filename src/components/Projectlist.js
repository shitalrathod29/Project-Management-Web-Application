import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from "./AppBar";
import { withStyles } from "@material-ui/core/styles";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleOutlined';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const useStyles = theme => ({
 //const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white'

  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});


class AddProject extends React.Component {

  constructor(props) {
    super(props);
    this.deleteCard = this.deleteCard.bind(this);
    this.state = {
      value: null,
      cards:[],
      open:false, setOpen:false,
      projName:"",projDesc:"",editOpen:false,index:null
    };
    
  }
  componentDidMount() {
    fetch('http://localhost:4000/getproject',
    {
      header: {
        "access-control-allow-origin" : "*"
      }})
      .then(response => response.json())
      .then(data => console.log("<========>",data))
      .catch(response => response.json());
  }

   handleProjDesc = (event) => {
    console.log("<--->",event.target.value);    
     this.setState({projDesc: event.target.value});
  };

   handleProjName = (event) => {
    console.log("<--->",event.target.value);
    this.setState({projName: event.target.value});
    };

   handleClickOpen = () => {
     this.setState({open: true,projName:"",projDesc:""});
   };

   deleteCard = (_index) =>{
     console.log(" deleting index "+_index); 
     let _cards = this.state.cards;
     _cards.splice(_index, 1);
     this.setState({cards: _cards});
   }
 
   handleClose = () => {
    this.setState({open: false});
   };

   handleEditClose = () => {
    this.setState({editOpen: false,index:null});
   };

   editTile = (_index) =>{
    console.log("editing index ",_index);
    console.log("op ",JSON.stringify(this.state));
    this.setState({editOpen: true,index:_index});
    this.setState({projName : this.state.cards[_index].project_name,projDesc :this.state.cards[_index].project_desc});
   
  }

  addNewTile = () => {    
    
    let _cards = this.state.cards;
    let newCard = { img:'', project_name:this.state.projName, project_desc:this.state.projDesc};
    _cards.push(newCard);
    this.setState({projDesc: "",projName: "",cards: _cards});
    this.handleClose();
  }

  editCompleteTile = () =>{
    debugger;
    let _index = this.state.index; let _cards = this.state.cards;
    let newCard = { img:'', project_name:this.state.projName, project_desc:this.state.projDesc};
    _cards[_index] = newCard;
    this.setState({projDesc: "",projName: "",cards: _cards});
    this.setState({editOpen: false,index:null});
    this.handleClose();
  }
  projectDetails() { 
    console.log("<=========>");
    let path = `newPath`;
    this.props.history.push('/link')

  }
  
  render() {
    const { classes } = this.props;
     return (
     
      <div> 
         <React.Fragment>
           <AppBar/>
      <CssBaseline />
      <main>      
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={0}>
          <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image=" "
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  <Avatar sx={{ m: 1, bgcolor: 'info.main' }}>
                    <AddCircleOutlineIcon />
                  </Avatar>
                  <Button size="medium" color="primary" onClick={this.handleClickOpen}>
                      Add
                    </Button>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
                </Grid>
                <br/> <br/> <br/> <br/>
                <Grid container spacing={4}>
            {this.state.cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <CardMedia
                    onClick = {()=> this.props.history.push('/projectdetails')}
                    className={classes.cardMedia}
                    image=" "
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.project_name}
                    </Typography>
                    <Typography>
                    {card.project_desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary"
                    onClick={ () => this.editTile(index) }>
                      Edit
                    </Button>
                    <Button size="small" color="primary"  
                    onClick={ () => this.deleteCard(index) }>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <div>
      <Dialog open={this.state.open} onClose={this.handleClose}>
        <DialogTitle>Add Project Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="text"
            maxLength={20}
            fullWidth
            value={this.state.projName}
            variant="standard"
            onChange={this.handleProjName}
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText  style={{color: 'black' }}>
            Project Description
          </DialogContentText>
           <TextareaAutosize 
            aria-label="min height"
            minRows={6}
            maxLength={20}
            value={this.state.projDesc}
            placeholder="Project Description"
            style={{ width: 350, color: 'black' }}
            onChange={this.handleProjDesc}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}><CancelRoundedIcon/>Cancel</Button>
          <Button onClick={this.addNewTile}><AddCircleRoundedIcon/>Create Project</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={this.state.editOpen} onClose={this.handleEditClose}>
        <DialogTitle>Edit Project Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="text"
            maxLength={20}
            fullWidth
            value={this.state.projName}
            variant="standard"
            onChange={this.handleProjName}
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText  style={{color: 'black' }}>
            Project Description
          </DialogContentText>
           <TextareaAutosize 
            aria-label="min height"
            minRows={6}
            value={this.state.projDesc}
            maxLength={20}
            placeholder="Project Description"
            style={{ width: 350, color: 'black' }}
            onChange={this.handleProjDesc}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleEditClose}><CancelRoundedIcon/>Cancel</Button>
          <Button onClick={this.editCompleteTile}><AddCircleRoundedIcon/>Save Details</Button>
        </DialogActions>
      </Dialog>
    </div>
   </React.Fragment>
  </div>
  );
  }
}
export default withStyles(useStyles, { withTheme: true })(AddProject);
