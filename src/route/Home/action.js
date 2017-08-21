import { createAction } from 'redux-actions';
import * as configActionTypes from './constant';

export const requestFetchDomain = createAction(configActionTypes.REQUEST_FETCH_DOMAIN);
export const finishFetchDomain = createAction(configActionTypes.FINISH_FETCH_DOMAIN);
export const requestFetchPosition = createAction(configActionTypes.REQUEST_FETCH_POSITION);
export const finishFetchPosition = createAction(configActionTypes.FINISH_FETCH_POSITION);