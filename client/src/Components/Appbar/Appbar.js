import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  // button: {
  //   margin: theme.spacing(1),
  // }
});

const Appbar = ({generateArticles, displayArticles}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid item xs={6}>
            <Typography variant="h3" color="inherit">
              BBC News
          </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary" className={classes.button} onClick = {generateArticles}>
              Generate Articles
      </Button>
          </Grid>

          <Grid item xs={3}>
      <Button variant="contained" color="secondary" className={classes.button} onClick = {displayArticles}>
              Display Articles
      </Button>
      </Grid>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar