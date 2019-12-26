import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILURE } from '../../constants'
import * as reducers from '../../reducers/RobotsReducer';

describe('searchRobots', () =>  {

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
    });

    it('should handle CHANGE_SEARCH_FIELD action', () => {
        expect(reducers.searchRobots({ searchField: '' }, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        });
    });
});

describe('requestRobots', function () {

    const initialRequestState = {
        isPending: false,
        robots: [],
        error: ''
    };

    it('should return the initial state', () => {
        expect(reducers.searchRobots(initialRequestState, {})).toEqual(initialRequestState);
    });

    it('should handle REQUEST_ROBOTS_PENDING action', function () {
        expect(reducers.requestRobots(initialRequestState, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            error: '',
            robots: [],
            isPending: true
        })
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', function () {
        expect(reducers.requestRobots(initialRequestState, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: 1,
                name: 'John Snow',
                email: 'john@snow.com'
            }]
        })).toEqual({
            error: "",
            robots: [{
                id: 1,
                name: 'John Snow',
                email: 'john@snow.com'
            }],
            isPending: false
        })
    });

    it('should handle REQUEST_ROBOTS_FAILURE action', function () {
        expect(reducers.requestRobots(initialRequestState, {
            type: REQUEST_ROBOTS_FAILURE,
            payload: 'Error'
        })).toEqual({
            error: 'Error',
            robots: [],
            isPending: false
        })
    });
});