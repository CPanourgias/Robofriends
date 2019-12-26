import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILURE } from '../../constants';
import { requestRobots } from '../../actions/RequestRobotsAction';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from "redux-thunk";


describe('Request Robots', function () {

    const mockStore = configureMockStore([thunkMiddleware]);

    it('should handle the request to Robohash API', function () {
        const store = mockStore();
        store.dispatch(requestRobots());
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: REQUEST_ROBOTS_PENDING
        });
    });
});
