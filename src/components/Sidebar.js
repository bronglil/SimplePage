import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Grid, Avatar, Container, Button} from '@material-ui/core';
import logoImg from './img/Lifetwig.png';
import Image from './img/leafs.png';
import dp from './img/dp.png';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  logo: {
    marginTop: '10px'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'transparent',
    backgroundImage: `url(${Image})`,
    opacity: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'inline-block',
      marginLeft: '-10px',
      fontWeight: 100
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `#1C2025`
  },
  box: {
    display: 'flex',
    marginTop: '-30px',
    marginLeft: '100px',
    justifyContent: 'space-between'
  },
  box1: {
    borderRadius: '100%',
    backgroundColor: 'green',
    marginLeft: '10px'
  },
  ava: {
    marginTop: '10px'
  }
}));
const navLinks = [
  {
    title: `Feed`,
    path: ``
  }, {
    title: `Map`,
    path: ``
  }, {
    title: `Tree`,
    path: ``
  }, {
    title: `Friends`,
    path: ``
  }
];

function Sidebar() {
  const dummyCategories = [
    'Home Feed',
    'Personal Info',
    'Feed',
    'Photo',
    'Chat',
    'Setting'
  ]
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (<div>
    <List>
      {
        dummyCategories.map((text, index) => (<ListItem button="button" key={text}>
          <ListItemText primary={text}/>
        </ListItem>))
      }
    </List>
  </div>);
  return (<div className={classes.root} maxWidth="md">
    <CssBaseline/>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton aria-label="Open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
          <MenuIcon/>
        </IconButton>

        <Grid container="container" className={classes.staright}>

          <Grid item="item" sm={3}>
            <img className={classes.logo} src={logoImg} alt="logo"/>
          </Grid>

          <Grid item="item" sm={5}>
            <Toolbar>
              <Container maxWidth="md" className={classes.navbarDisplayFlex}>

                <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                  {
                    navLinks.map(({title, path}) => (<a href={path} key={title} className={classes.linkText}>
                      <ListItem button="button">
                        <ListItemText primary={title}/>
                      </ListItem>
                    </a>))
                  }
                </List>
              </Container>

            </Toolbar>

          </Grid>

          <Grid item="item" sm={2}>
            <Avatar className={classes.ava}>
              <img src={dp} alt="logo"/>
            </Avatar>

          </Grid>

        </Grid>

      </Toolbar>
    </AppBar >

    <nav className={classes.drawer}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

      <Hidden smUp="smUp" implementation="css">
        <Drawer variant="temporary" anchor={theme.direction === 'rtl'
            ? 'right'
            : 'left'} open={mobileOpen} onClose={handleDrawerToggle} classes={{
            paper: classes.drawerPaper
          }} ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
            <CloseIcon/>
          </IconButton>
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown="xsDown" implementation="css">
        <Drawer className={classes.drawer} variant="permanent" classes={{
            paper: classes.drawerPaper
          }}>
          <div className={classes.toolbar}/> {drawer}
        </Drawer>
      </Hidden>
    </nav>
    <div className={classes.content}>
      <div className={classes.toolbar}/>

    </div>
  </div>);
}

export default Sidebar;
