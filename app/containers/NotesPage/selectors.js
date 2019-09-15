import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the notesPage state domain
 */

const selectNotesPageDomain = state => state.notesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NotesPage
 */

const makeSelectNotesPage = () =>
  createSelector(
    selectNotesPageDomain,
    substate => substate,
  );

export default makeSelectNotesPage;
export { selectNotesPageDomain };
