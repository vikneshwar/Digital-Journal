/**
 *
 * MiddleSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMiddleSection from './selectors';
import reducer from './reducer';
import saga from './saga';

export function MiddleSection() {
  useInjectReducer({ key: 'middleSection', reducer });
  useInjectSaga({ key: 'middleSection', saga });

  return <div />;
}

MiddleSection.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  middleSection: makeSelectMiddleSection(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MiddleSection);
