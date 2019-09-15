/**
 *
 * NotesPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectNotesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function NotesPage() {
  useInjectReducer({ key: 'notesPage', reducer });
  useInjectSaga({ key: 'notesPage', saga });

  return <div />;
}

NotesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  notesPage: makeSelectNotesPage(),
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

export default compose(
  withConnect,
  memo,
)(NotesPage);
