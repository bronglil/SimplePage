import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Hidden, Paper} from "@material-ui/core";

const useStyles = makeStyles({
  appMain: {
    width: '100%',
    backgroundColor: '#F0F2F5'
  }
});

function App() {
  const classes = useStyles();
  return (<> < div className = {
    classes.appMain
  } > <Sidebar/>
  <Header/>
  <Posts/>

</div>
</>);
}

export default App;
