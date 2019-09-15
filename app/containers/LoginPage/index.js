/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import {
  selectIsLoading,
  selectIsError,
  selectErrorMessage,
} from './selectors';

import reducer from './reducer';
import saga from './saga';

import TabPanel from '../../components/TabPanel';
import LoginComponent from '../../components/Login/Loadable';
import SignupComponent from '../../components/SignUp/Loadable';
import Paper from '@material-ui/core/Paper';
import { loginAction, registerAction } from './actions';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  errorMessage: {
    width: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '140px',
    padding: '15px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '15px',
    backgroundColor: '#e91e63',
    color: 'white',
  },
}));

function LoginPage(props) {
  const { onLogin, onRegister, isLoading, isError, errorMessage } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div>
      {isError ? (
        <Paper className={classes.errorMessage}>{errorMessage}</Paper>
      ) : null}

      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Paper elevation={5}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              centered
              aria-label="full width tabs example"
            >
              <Tab label="Login" />
              <Tab label="Sign Up" />
            </Tabs>
          </Paper>
        </AppBar>
        <Paper>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <LoginComponent onSubmit={onLogin} isLoading={isLoading} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <SignupComponent onSubmit={onRegister} />
            </TabPanel>
          </SwipeableViews>
        </Paper>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state),
  isError: selectIsError(state),
  errorMessage: selectErrorMessage(state),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (...params) => dispatch(loginAction(...params)),
    onRegister: (...params) => dispatch(registerAction(...params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
