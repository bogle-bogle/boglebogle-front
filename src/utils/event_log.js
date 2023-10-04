import * as Api from '../api';

export function eventLog(logData) {
  return Api.post('/api/event', logData);
}
