import _ from 'lodash';
import { Map, fromJS } from 'immutable';
import { toArray } from 'utils';

export default (state = Map(), action) => {
  const { type } = action;
  const matches = /(.*)_(PENDING|FULFILLED|REJECTED)/.exec(type);

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;

  // Store whether a request is happening at the moment or not
  // e.g. will be true when receiving GET_TODOS_REQUEST
  //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
  return state.merge(fromJS({ [requestName]: requestState === 'PENDING' }));
};

export const createLoadingSelector = actions => state => {
  // returns true only when all actions is not loading

  return _(toArray(actions)).some(action => state.getIn(['loading', action]));
};
