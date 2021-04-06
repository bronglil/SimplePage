import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginLeft: '35%',
    marginBottom: 100,
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10%'
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {duration: theme.transitions.duration.shortest})
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  form: {
    width: '70%',
    marginTop: '-10px'
  }
}));

export default function Posts() {
  const classes = useStyles();

  const [post, setPost] = useState([
    {
      id: 1,
      images: "../assets/Ellipse1.png",
      name: "Brandon Copper",
      imPost: "./img/download1.png",
      date: 'today 11: 24'
    }, {
      id: 2,
      images: "../assets/Ellipse2.png",
      name: "jannet Robert",
      imPost: "./img/download1.png",
      date: 'today 11: 24'
    }, {
      id: 3,
      images: "../assets/Ellipse2.png",
      name: "Ronie Jordan",
      imPost: "./img/download1.png",
      date: 'today 11: 24'
    }, {
      id: 4,
      images: "../assets/Ellipse2.png",
      name: "Ronie Jordan",
      imPost: "./img/download1.png",
      date: 'today 11: 24'
    }
  ]);

  return (post.map((info) => (<Card className={classes.root} key={info.id}>

    <CardHeader avatar={<Avatar src = {
        info.images
      }
      size = {
        100
      } />
} action={<IconButton  style = {{fontSize: '15px'}} > {
        info.date
      }
      </IconButton>
} title={info.name}/>

    <CardMedia className={classes.media} image={info.imPost}/>

    <IconButton aria-label="add to favorites">
      <FavoriteIcon/>
    </IconButton>

    <TextField className={classes.form} id="standard-basic" label="Write Comment Here"/>

  </Card>)))
}
