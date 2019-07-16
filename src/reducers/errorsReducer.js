import _ from 'lodash';
import { Map, fromJS } from 'immutable';
import { toArray } from 'utils';

export default (state = Map(), action) => {
  const { type, payload } = action;
  const matches = /(.*)_(PENDING|REJECTED)/.exec(type);

  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;

  // Store errorMessage
  // e.g. stores errorMessage when receiving GET_TODOS_FAILURE
  //      else clear errorMessage when receiving GET_TODOS_REQUEST
  return state.merge(fromJS({ [requestName]: requestState === 'REJECTED' ? payload.message : '' }));
};

export const createErrorMessageSelector = actions => state => {
  // returns the first error messages for actions
  // * We assume when any request fails on a page that
  //   requires multiple API calls, we shows the first error

  return (
    _(toArray(actions))
      .map(action => state.getIn(['errors', action]))
      .filter(v => v)
      .first() || ''
  );
};
