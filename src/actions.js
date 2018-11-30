import {
    CHANGE_SEARCH_VALUE,
    GET_ROBOTS_FAILED,
    GET_ROBOTS_SUCCESS,
    GET_ROBOTS_PENDING
} from './constants';

export const setSearchValue = (text) => ({
    type: CHANGE_SEARCH_VALUE,
    payload: text
})

export const getRobots = () => (dispatch) => {
    dispatch({ type: GET_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then(users => dispatch({ type: GET_ROBOTS_SUCCESS, payload: users}))
    .catch(error => dispatch({type: GET_ROBOTS_FAILED, payload: error}))
}