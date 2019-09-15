/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  loginSuccessAction,
  registerSuccessAction,
  errorAction,
} from './actions';

import request from 'utils/request';
import { makeSelectLoginDetails, makeSelectRegisterDetails } from './selectors';
import { LOGIN_ACTION, REGISTER_ACTION } from './constants';

const getLoginDetails = makeSelectLoginDetails();
const getRegisterDetails = makeSelectRegisterDetails();
/**
 * Github repos request/response handler
 */
export function* doLogin() {
  const payload = yield select(makeSelectLoginDetails());
  const requestURL = '/api/user/login';
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    const loginResponse = yield call(request, requestURL, options);
    yield put(loginSuccessAction(loginResponse.token));
  } catch (err) {
    yield put(errorAction(err.response));
  }
}

export function* doSignUp() {
  const payload = yield select(getRegisterDetails);
  const requestURL = '/api/user/signUp';
  const options = {
    method: 'POST',
    body: payload,
  };

  try {
    // Call our request helper (see 'utils/request')
    const loginResponse = yield call(request, requestURL, options);
    yield put(loginSuccessAction(loginResponse.token));
  } catch (err) {
    yield put(errorAction(err.response));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOGIN_ACTION, doLogin);
  yield takeLatest(REGISTER_ACTION, doSignUp);
}
