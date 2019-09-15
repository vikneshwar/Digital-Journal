/**
 *
 * TopBar
 *
 */

import React, { memo } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import PublicOutlined from '@material-ui/icons/PublicOutlined';
import { Avatar } from '@material-ui/core/Avatar';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: '0px',
    width: '100%',
  },
  title: {
    flexGrow: 1,
    marginLeft: '20px',
  },

  loginButton: {},
  signupButton: {
    marginLeft: '10px',
  },
  link: {
    textDecoration: 'none',
  },
  avatar: {
    margin: '30px',
    backgroundColor: theme.palette.secondary.main,
  },
  productTitle: {
    textDecoration: 'none',
    color: 'white',
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <Avatar className={classes.avatar}>
            <PublicOutlined />
          </Avatar> */}
          <PublicOutlined fontSize="large" />
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.productTitle}>
              Digital Journal
            </Link>
          </Typography>
          <Link to="/login" className={classes.link}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.loginButton}
            >
              Login / Sign Up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

TopBar.propTypes = {};

export default memo(TopBar);
