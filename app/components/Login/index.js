import React, { memo, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const errorMap = {
  email: {
    regEx: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'Enter a valid email address',
  },
  password: {
    regEx: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    message:
      'Password must be minimum 8 characters long and should habve atleast 1 letter , 1 number and 1 special character',
  },
};

function SignIn(props) {
  const classes = useStyles();

  const { isLoading, onSubmit } = props;
  const [state, setState] = useState({
    fieldValue: {
      email: '',
      password: '',
    },
    fieldError: {
      email: null,
      password: null,
    },
    isError: false,
  });

  const handleOnChange = (type, { target: { value } }) => {
    const regEx = errorMap[type] && errorMap[type].regEx;
    const toUpdate = JSON.parse(JSON.stringify(state));
    if (!regEx.test(value)) {
      toUpdate.fieldError[type] = errorMap[type] && errorMap[type].message;
      toUpdate.isError = true;
    } else {
      toUpdate.fieldError[type] = null;
      toUpdate.isError = Object.keys(state.fieldError).some(
        name => state.fieldError[name],
      );
    }
    toUpdate.fieldValue[type] = value;
    setState(toUpdate);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const { email, password } = state.fieldValue;
    return onSubmit(email, password);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        {/* state.isError &&
          {
            <Paper>
            <ul>
              {Object.keys(state.fieldError).map(name => (
                <li>{state.fieldError[name]}</li>
              ))}
            </ul>
          </Paper>
          } */}
        <form className={classes.form} onSubmit={handleOnSubmit}>
          <TextField
            error={!!(state.fieldError && state.fieldError.email)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={state.fieldValue.email}
            onChange={e => handleOnChange('email', e)}
            // autoComplete="email"
            autoFocus
          />
          <TextField
            error={!!(state.fieldError && state.fieldError.password)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={state.fieldValue.password}
            onChange={e => handleOnChange('password', e)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={state.isError}
            className={classes.submit}
          >
            {isLoading ? (
              <CircularProgress size={14} />
            ) : (
              <Typography>Login</Typography>
            )}
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default memo(SignIn);
