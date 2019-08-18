import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import * as reducers from './reducers'

describe('Search robots', () => {

    const initialSearchState = {
        searchField: ''
    }
     
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialSearchState, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' })
    })
})

describe('Request robots', () => {

    const initialRobotsState = {
        robots: [],
        isPending: false
    }
     
    it('Should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialRobotsState)
    })

    it('Should handle the REQUEST_ROBOTS_PENDING state', () => {
        expect(reducers.requestRobots(initialRobotsState, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true
        })
    })

    it('Should handle the REQUEST_ROBOTS_SUCCESS state', () => {
        expect(reducers.requestRobots(initialRobotsState, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '1',
                name: 'Chris',
                email: 'Chris@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id: '1',
                name: 'Chris',
                email: 'Chris@gmail.com'
            }],
            isPending: false
        })
    })

    it('Should handle the REQUEST_ROBOTS_FAILED state', () => {
        expect(reducers.requestRobots(initialRobotsState, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Oh no!'
        })).toEqual({
            error: 'Oh no!',
            robots: [],
            isPending: false
        })
    })
})