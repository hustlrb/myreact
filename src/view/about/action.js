import { createAction } from 'redux-actions';
import * as ActionType from './actionType';

export const requestFetchDomain = createAction(ActionType.REQUEST_FETCH_DOMAIN);
export const finishFetchDomain = createAction(ActionType.FINISH_FETCH_DOMAIN);
export const requestFetchLocation = createAction(ActionType.REQUEST_FETCH_LOCATION);
export const finishFetchLocation = createAction(ActionType.FINISH_FETCH_LOCATION);