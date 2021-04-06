
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Tooltip, Avatar} from '@material-ui/core';
import { GoPrimitiveDot } from "react-icons/go";
import axios from 'axios';
const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
     display: 'none',
    }
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  online: {
      position: "absolute",
      bottom: -3,
      transition: "all 0.5s ease",
      "& > .MuiSvgIcon-root": {
        borderRadius: 999,
        backgroundColor: "black",
        color: "#56c700",
        fontSize: 10,
      },
    },
}));


export default function PermanentDrawerRight() {
  const classes = useStyles();
   const [mobileOpen, setMobileOpen] = useState(false);
   const [users, setUsers] = useState([]);

  const [family,  setFamily] = useState([
    {id: 1, images: "./assets/Ellipse1.png", name: "Brandon Copper"},
    {id: 2, images: "./assets/Ellipse2.png", name:  "jannet Robert"},
    {id: 2, images: "./assets/Ellipse2.png", name: "Ronie Jordan"},
  ]);




  useEffect(async () => {
    const response = await axios.get("https://breakingbadapi.com/api/characters");
    setUsers(response.data);
  }, []);


  return (
    <>
    <div className={classes.root}>
      <CssBaseline />


      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {family.map((info) => (
            <ListItem button key={info.id} >
            <Tooltip placement="left" title={info.name} arrow>
              <Avatar src={info.images} size={100}  />
            </Tooltip>
              <ListItemText primary={info.name } style={{marginLeft: '6px'}} />
               <GoPrimitiveDot style={{color: 'green'}}/>
            </ListItem>
          ))}
        </List>
        <Divider />



        <List>
        <h6>Friends Online</h6>
          {users.map(({ char_id, name, img }) => (
            <ListItem button key={char_id} >
            <Tooltip placement="left" title={name} arrow>
              <Avatar src={img} size={100}  />
            </Tooltip>
              <ListItemText primary={name } style={{marginLeft: '6px'}} />
               <GoPrimitiveDot style={{color: 'green'}}/>
            </ListItem>

          ))}
        </List>

      </Drawer>
    </div>
    </>
  );
}
