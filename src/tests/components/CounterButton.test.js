import { shallow } from "enzyme";
import CounterButton from "../../components/CounterButton";
import React from "react";

describe('Counter Button', () => {

    // beforeAll(() => {
    //     /* Runs before all tests */
    // })
    // afterAll(() => {
    //     /* Runs after all tests */
    // })
    // beforeEach(() => {
    //     /* Runs before each test */
    // })
    // afterEach(() => {
    //     /* Runs after each test */
    // })

    it('expect to render CounterButton component', () => {
        const mockColor = 'red',
            wrapper = shallow(<CounterButton color={mockColor}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('correctly increments the counter', () => {
        const mockColor = 'red',
            wrapper = shallow(<CounterButton color={mockColor}/>);
        expect.assertions(2);

        // Test count increment
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({ count: 1});

        // Test props
        expect(wrapper.props().color).toEqual('red');
    });
});