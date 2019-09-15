/*
 *
 * LoginPage constants
 *
 */

export const DEFAULT_ACTION = 'app/LoginPage/DEFAULT_ACTION';

export const LOGIN_ACTION = 'app/LoginPage/LOGIN_ACTION';

export const REGISTER_ACTION = 'app/LoginPage/REGISTER_ACTION';

export const LOGIN_SUCCESS_ACTION = 'app/LoginPage/LOGIN_SUCCESS_ACTION';
export const REGISTER_SUCCESS_ACTION = 'app/LoginPage/REGISTER_SUCCESS_ACTION';

export const API_ERROR_ACTION = 'app/LoginPage/API_ERROR_ACTION';

export const ERROR_MAP = {
  MISSING_REQUIRED_FIELDS:
    'Required fields are missing. Please fill all mandatory fields',
  EXISTING_USER: 'This email is already registered with a account',
  NO_USER: 'Account is not registered. Please register first to login',
  INVALID_PASSWORD: 'Password does not match',
};
