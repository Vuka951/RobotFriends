import {
    CHANGE_SEARCH_VALUE,
    GET_ROBOTS_FAILED,
    GET_ROBOTS_SUCCESS,
    GET_ROBOTS_PENDING
} from './constants';

const initialStateSearch = {
    searchvalue: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_VALUE:
        return {...state, searchvalue: action.payload};
        default:
        return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const getRobots = (state = initialStateRobots, action = {}) => {
    switch(action.type) {
        case GET_ROBOTS_PENDING:
         return {...state, isPending: true };
        case GET_ROBOTS_SUCCESS:
         return {...state, robots: action.payload, isPending: false}
        case GET_ROBOTS_FAILED:
         return {...state , error: action.payload, isPending: false}
        default:
         return state
    }
}