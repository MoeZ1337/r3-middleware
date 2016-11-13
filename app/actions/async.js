import { CALL_API } from 'redux-api-middleware';

export const ALERT_REQUEST = 'ALERT_REQUEST';
export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_FAILURE = 'ALERT_FAILURE';

function fetchAlerts() {
  return {
    [CALL_API]: {
      types: [ALERT_REQUEST, ALERT_SUCCESS, ALERT_FAILURE],
      endpoint: 'https://api.github.com/users/MoeZ1337/repos',
      method: 'GET',
    },
  };
}

export { fetchAlerts };
