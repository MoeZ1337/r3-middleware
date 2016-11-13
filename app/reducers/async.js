import { ALERT_REQUEST, ALERT_SUCCESS, ALERT_FAILURE } from '../actions/async';
import _ from 'lodash';

const initialState = {
  fetching: false,
  payload: {},
};

const async = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
        payload: {},
      });
    case ALERT_SUCCESS:
      const repoToPresent = _.findKey(action.payload, (o) => {
        return o.name === 'r3-middleware';
      });
      console.log();
      return Object.assign({}, state, {
        fetching: false,
        payload: { status: 'complete', name: action.payload[repoToPresent].name },
      });
    case ALERT_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export default async;
