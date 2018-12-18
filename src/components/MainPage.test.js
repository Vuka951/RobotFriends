import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onGetRebots: jest.fn(),
        robots: [],
        searchvalue: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />);
})

it('renders MainPage', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots properly', () => {
    const mockProps2 = {
        onGetRebots: jest.fn(),
        robots: [{
            id: 3,
            name: 'Jimmy',
            email: 'jimmy@gasd.com'
        }],
        searchvalue: 'jimmy',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filteredRobots()).toEqual([{
        id: 3,
        name: 'Jimmy',
        email: 'jimmy@gasd.com'
    }]);
})

it('filters robots properly 2', () => {
    const mockProps3 = {
        onGetRebots: jest.fn(),
        robots: [{
            id: 3,
            name: 'Jimmy',
            email: 'jimmy@gasd.com'
        }],
        searchvalue: 'a',
        isPending: false
    }
    const resultOfFilteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filteredRobots()).toEqual(resultOfFilteredRobots);
})