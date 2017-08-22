import { createAction } from 'redux-actions';
import * as configActionTypes from './constant';

export const requestFetchDomain = createAction(configActionTypes.REQUEST_FETCH_DOMAIN);
export const finishFetchDomain = createAction(configActionTypes.FINISH_FETCH_DOMAIN);
export const requestFetchLocation = createAction(configActionTypes.REQUEST_FETCH_LOCATION);
export const finishFetchLocation = createAction(configActionTypes.FINISH_FETCH_LOCATION);