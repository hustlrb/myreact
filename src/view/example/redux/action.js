import { createAction } from 'redux-actions';
import * as ActionType from './actionType';

export const requestFetchDomain = createAction(ActionType.REQUEST_FETCH_DOMAIN);
export const finishFetchDomain = createAction(ActionType.FINISH_FETCH_DOMAIN);
export const requestFetchPosition = createAction(ActionType.REQUEST_FETCH_POSITION);
export const finishFetchPosition = createAction(ActionType.FINISH_FETCH_POSITION);