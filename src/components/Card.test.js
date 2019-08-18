import { shallow } from "enzyme";
import React from 'react';
import Card from './Card';

it('Render card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})

// it('Renders card component', () => {
//     expect(shallow(<Card />).length).toEqual(1);
// })