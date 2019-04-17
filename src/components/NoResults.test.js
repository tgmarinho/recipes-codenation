import React from 'react';
import { shallow } from 'enzyme';
import { NoResults } from './NoResults';

describe('NoResults', () => {
    test('Should be NoResults', () => {
        const wrapper = shallow(<NoResults />);
        expect(wrapper.find('h2').length).toBe(1);
    })

})
