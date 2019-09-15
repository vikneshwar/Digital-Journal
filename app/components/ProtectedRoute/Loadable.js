/**
 *
 * Asynchronously loads the component for ProtectedRoute
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
