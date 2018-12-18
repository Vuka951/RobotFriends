import * as actions from './actions';

import {
    CHANGE_SEARCH_VALUE,
    GET_ROBOTS_FAILED,
    GET_ROBOTS_SUCCESS,
    GET_ROBOTS_PENDING
} from './constants';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);


it('should create an action to search robots', () => {
    const text = 'did';
    const expectedAction = {
        type: CHANGE_SEARCH_VALUE,
        payload: text
    }
    expect(actions.setSearchValue(text)).toEqual(expectedAction);
})

it('handles getting robots api', () => {
    const store = mockStore();
    store.dispatch(actions.getRobots());
    const action = store.getActions();
    const expectedAction = {
        type: GET_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedAction);
})