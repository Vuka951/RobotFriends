import {
    CHANGE_SEARCH_VALUE,
    GET_ROBOTS_FAILED,
    GET_ROBOTS_SUCCESS,
    GET_ROBOTS_PENDING
} from './constants';

import * as reducers from './reducers';

describe('search robots', () => {
    const initalStateSearch = {
        searchvalue: ''
    }
    it('should return the inital state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchvalue: '' });
    })

    it('should hande CHANGE_SEARCH_VALUE event', () => {
        expect(reducers.searchRobots(initalStateSearch, {
            type: CHANGE_SEARCH_VALUE,
            payload: 'abc'
        })).toEqual({
            searchvalue: 'abc'
        })
    })
})

describe('get robots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }

    it('should return the inital state', () => {
        expect(reducers.getRobots(undefined, {})).toEqual(initialStateRobots);
    })

    it('should hande GET_ROBOTS_PENDING action', () => {
        expect(reducers.getRobots(initialStateRobots, {
            type: GET_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            error: '',
            isPending: true
        })
    })

    it('should hande GET_ROBOTS_SUCCESS action', () => {
        expect(reducers.getRobots(initialStateRobots, {
            type: GET_ROBOTS_SUCCESS,
            payload: [{
                id: 123,
                name: 'Test',
                email: 'test@test.com'
            }]
        })).toEqual({
            robots: [{
                id: 123,
                name: 'Test',
                email: 'test@test.com'
            }],
            error: '',
            isPending: false
        })
    })

    it('should hande GET_ROBOTS_FAILED action', () => {
        expect(reducers.getRobots(initialStateRobots, {
            type: GET_ROBOTS_FAILED,
            payload: 'something went wrong bitch'
        })).toEqual({
            robots: [],
            error: 'something went wrong bitch',
            isPending: false
        })
    })
})