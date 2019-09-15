/*
 *
 * LoginPage reducer
 *
 */
import produce, { isDraft } from 'immer';
import {
  DEFAULT_ACTION,
  LOGIN_ACTION,
  LOGIN_SUCCESS_ACTION,
  REGISTER_ACTION,
  REGISTER_SUCCESS_ACTION,
  API_ERROR_ACTION,
} from './constants';

export const initialState = {
  isLoggedIn: false,
  isOngoingAjax: false,
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  isError: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOGIN_ACTION:
        // draft = { ...draft, ...action.payload, isOngoingAjax: true };
        draft.email = action.payload.email;
        draft.password = action.payload.password;
        draft.isOngoingAjax = true;
        break;
      case LOGIN_SUCCESS_ACTION:
        draft.isLoggedIn = true;
        draft.isOngoingAjax = false;
        draft.token = action.payload.token;
        break;
      case API_ERROR_ACTION:
        draft.isOngoingAjax = false;
        draft.isError = true;
        draft.error = {
          errorType: action.payload.errorType,
          errorMessage: action.payload.errorMessage,
        };
        break;
      case REGISTER_ACTION:
        draft.email = action.payload.email;
        draft.password = action.payload.password;
        draft.firstName = action.payload.firstName;
        draft.lastName = action.payload.lastName;

        draft.isOngoingAjax = true;
        break;
      case REGISTER_SUCCESS_ACTION:
        draft.isLoggedIn = true;
        draft.isOngoingAjax = false;
        draft.token = action.payload.token;

        break;
    }
  });

export default loginPageReducer;
