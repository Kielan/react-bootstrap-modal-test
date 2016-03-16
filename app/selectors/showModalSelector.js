/**
 * Are we loading anything at the moment
 */

import { createSelector } from 'reselect';
import globalSelector from 'globalSelector';

const showModalSelector = createSelector(
  globalSelector,
  (globalState) => globalState.get('showModal')
);

export default showModalSelector;
