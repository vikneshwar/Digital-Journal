/**
 *
 * Button
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function MyButton() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

Button.propTypes = {};

export default MyButton;
