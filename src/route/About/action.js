import { createAction } from 'redux-actions';
import * as ActionTypes from './constant';

export const requestFetchDomain = createAction(ActionTypes.REQUEST_FETCH_DOMAIN);
export const finishFetchDomain = createAction(ActionTypes.FINISH_FETCH_DOMAIN);
export const requestFetchLocation = createAction(ActionTypes.REQUEST_FETCH_LOCATION);
export const finishFetchLocation = createAction(ActionTypes.FINISH_FETCH_LOCATION);