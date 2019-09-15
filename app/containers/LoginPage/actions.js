/*
 *
 * LoginPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_ACTION,
  LOGIN_SUCCESS_ACTION,
  REGISTER_ACTION,
  REGISTER_SUCCESS_ACTION,
  API_ERROR_ACTION,
  ERROR_MAP,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loginAction(email, password) {
  return {
    type: LOGIN_ACTION,
    payload: {
      email,
      password,
    },
  };
}

export function loginSuccessAction(token) {
  return {
    type: LOGIN_SUCCESS_ACTION,
    payload: { token },
  };
}

export function registerAction(firstName, lastName, email, password) {
  return {
    type: REGISTER_ACTION,
    payload: {
      firstName,
      lastName,
      email,
      password,
    },
  };
}

export function registerSuccessAction(token) {
  return {
    type: REGISTER_SUCCESS_ACTION,
    payload: { token },
  };
}

export function errorAction(error) {
  return {
    type: API_ERROR_ACTION,
    payload: {
      errorType: error.message,
      errorMessage: ERROR_MAP[error.message] || error.message,
    },
  };
}
