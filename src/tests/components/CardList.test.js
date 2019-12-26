import {shallow} from "enzyme";
import CardList from "../../components/CardList";
import React from "react";

it('expect to render CardList component', () => {
    expect.assertions(1);

    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'Johnny',
            email: 'john@snow.com'
        },
    ];
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});