import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

const selectEmail = state => selectLoginPageDomain(state).email;

const selectFirstName = state => selectLoginPageDomain(state).firstName;

const selectLastName = state => selectLoginPageDomain(state).lastName;

const selectPassword = state => selectLoginPageDomain(state).password;

const selectIsLoading = state => selectLoginPageDomain(state).isOngoingAjax;

const selectIsError = state => selectLoginPageDomain(state).isError;

const selectErrorMessage = state =>
  selectLoginPageDomain(state).error &&
  selectLoginPageDomain(state).error.errorMessage;
/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginDetails = () =>
  createSelector(
    selectEmail,
    selectPassword,
    (email, password) => ({
      email,
      password,
    }),
  );

const makeSelectRegisterDetails = () =>
  createSelector(
    selectFirstName,
    selectLastName,
    selectEmail,
    selectPassword,
    (firstName, lastName, email, password) => ({
      firstName,
      lastName,
      email,
      password,
    }),
  );
export {
  selectLoginPageDomain,
  selectEmail,
  selectFirstName,
  selectLastName,
  selectPassword,
  selectIsLoading,
  selectIsError,
  selectErrorMessage,
  makeSelectLoginDetails,
  makeSelectRegisterDetails,
};
