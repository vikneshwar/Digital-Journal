import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the middleSection state domain
 */

const selectMiddleSectionDomain = state => state.middleSection || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MiddleSection
 */

const makeSelectMiddleSection = () =>
  createSelector(
    selectMiddleSectionDomain,
    substate => substate,
  );

export default makeSelectMiddleSection;
export { selectMiddleSectionDomain };
