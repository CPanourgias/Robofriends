import { shallow } from "enzyme";
import MainPage from "../../components/MainPage";
import React from "react";

describe('Main Page tests', () => {


    // beforeAll(() => {
    //     /* Runs before all tests */
    // })
    // afterAll(() => {
    //     /* Runs after all tests */
    // })
    // afterEach(() => {
    //     /* Runs after each test */
    // })

    let wrapper;
    beforeEach(() => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 1,
                name: 'John Snow',
                email: 'john@snow.com'
            }],
            searchField: '',
            isPending: false
        }
        wrapper = shallow(<MainPage { ...mockProps }/>);
    });

    it('renders MainPage', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('filters robots correctly', () => {

        let filteredRobots = [{
            id: 1,
            name: 'John Snow',
            email: 'john@snow.com'
        }];

        // No input
        expect(wrapper.instance().filteredRobots()).toEqual(filteredRobots);

        // Correct input
        wrapper.setProps( { searchField: 'John' } );
        expect(wrapper.instance().filteredRobots()).toEqual(filteredRobots);

        // Incorrect input
        filteredRobots = [];
        wrapper.setProps( { searchField: 'a' } );
        expect(wrapper.instance().filteredRobots()).toEqual(filteredRobots);
    });
});