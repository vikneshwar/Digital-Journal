/**
 *
 * MiddleBanner
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Banner from '../../images/Post-digital-journal.jpg';
import { Button } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    padding: '0px',
    marginTop: '40px',
  },
  banner: {
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // opacity: '100%',
    color: 'white',
    fontSize: '16px',
    padding: '12px 24px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
}));

function MiddleBanner() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        {/* <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography> */}
        <img src={Banner} className={classes.banner} alt="Digital Journal" />
        <div className={classes.buttonContainer}>
          {/* <Button variant="contained" color="primary">
            Login
          </Button>
          <Button variant="contained" color="secondary">
            Sign Up
          </Button> */}
        </div>
      </Paper>
    </div>
  );
}

MiddleBanner.propTypes = {};

export default memo(MiddleBanner);
