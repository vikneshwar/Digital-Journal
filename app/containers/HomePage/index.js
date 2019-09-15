/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import MiddleBanner from '../../components/MiddleBanner';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '100px',
  },
  loginMessage: {
    padding: '30px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
    backgroundColor: '#e91e63',
    color: 'white',
  },
}));
export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.loginMessage}>
        Please login or Sign Up to view your Digital Notes
      </Paper>
      <MiddleBanner />
    </div>
  );
}
