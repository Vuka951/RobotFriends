import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render card component', () => {
    const mockRobots = [{
        id: 1,
        name: 'Jimmy Jimmy',
        username: 'SmallJim',
        email: 'jimmy@gimmy.com'

    }]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})
